/* eslint-disable max-len */
import OssRecommendation from "@interfaces/highlight/recommendations/OssRecommendation";
import { logger } from "@shared/Logger";
import HighlightOssService from "./HighlightOssService";
import Excel from "exceljs";
import { int, QueryResult } from "neo4j-driver";
import ObjectDocumentNode from "@entities/Imaging/Documents/ObjectDocumentNode";
import BinderFactory from "../technology/binders/BinderFactory";
import { getHighlightLanguage } from "../technology/HighlightLanguage";
import PatternExtractorFactory from "../technology/pattern/PatternExtractorFactory";
import BinderFactor from "../technology/binders/BinderFactory";

export default class HighlightObsolescenceService extends HighlightOssService {
  /**
   * Treat and enrich a list of recommendations
   * @param recommendation List of recommendations
   * @returns Enriched recommendations with the number of links
   */
  private async getInsights(recommendation: OssRecommendation, application: string): Promise<OssRecommendation> {
    recommendation.integration = [];

    try {
      const request = `MATCH (o:Object:\`${application}\`)-[r]-(ot:Object) 
      WHERE ANY ( x in $Patterns WHERE o.FullName CONTAINS x )  
      AND NOT ot.FullName CONTAINS $root
      RETURN DISTINCT TYPE(r) as type, COUNT(DISTINCT r) as num_rel`;

      // Filter by techno
      const language = getHighlightLanguage(recommendation.technology);
      const patternExtractor = PatternExtractorFactory.getPatternExtractor(language);

      const patterns = patternExtractor.getPatterns(recommendation.component);
      const params: any = {
        Patterns: patterns,
      };

      const res: QueryResult = await HighlightOssService.NEO4JAL.executeWithParameters(request, params);

      let relType = "";
      let count = 0;
      for (const record of res.records) {
        relType = String(record.get("type"));
        count = int(record.get("num_rel")).toNumber();

        recommendation.integration.push({
          type: relType,
          count: count,
        });
      }
    } catch (err) {
      logger.error(`Failed to get the insights for the recommendation with root : ${recommendation.component}`);
    }

    return recommendation;
  }

  /**
   * Process the excel file and create recommendation
   * @param application Name of the application
   * @param path Path to the Excel report
   */
  public async processExcel(application: string, path: string): Promise<OssRecommendation[]> {
    const workbook = new Excel.Workbook();

    try {
      await workbook.xlsx.readFile(path);
    } catch (err) {
      logger.error(`Failed to process the file at: ${path}.`, err);
      throw new Error("Failed to open the excel file.");
    }

    // Verify that the file can be processed
    let obsolescence: OssRecommendation[] = [];
    const tabs = workbook.worksheets.map(x => x.name);
    if (tabs.includes(HighlightObsolescenceService.PORTFOLIO_LEVEL_TAB)) {
      obsolescence = this.treatPortfolioLevel(workbook);
    } else if (tabs.includes(HighlightObsolescenceService.APPLICATION_LEVEL_TAB)) {
      obsolescence = this.treatApplicationLevel(workbook, application);
    } else {
      // No worksheet has been identified, so throw an error
      throw new Error(
        `Excel report is not correct. Failed to find '${HighlightOssService.APPLICATION_LEVEL_TAB}' or '${HighlightOssService.PORTFOLIO_LEVEL_TAB}'.`,
      );
    }

    // Treat the recommendations
    for (let it = 0; it < obsolescence.length; it++) {
      obsolescence[it] = await this.getInsights(obsolescence[it], application);
    }

    return obsolescence;
  }

  /**
   * Get the time difference in months
   * @param d1 Date 1
   * @param d2 Date 2
   * @returns The number of months
   */
  protected monthDiff(d1: Date, d2: Date) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  /**
   * Create a tag for Open source safety
   * @param blocker Blocker to apply
   * @returns
   */
  protected async createTagContains(blocker: OssRecommendation): Promise<boolean> {
    const language = getHighlightLanguage(blocker.technology);
    const patternExtractor = PatternExtractorFactory.getPatternExtractor(language);
    const binderFactory = BinderFactor.getBinder(language, blocker.application);

    const patterns = patternExtractor.getPatterns(blocker.component);
    const name = patternExtractor.getName(blocker.component);

    const tag = `Obsolescence: ${this.getYearsAndMonthsAsString(new Date(blocker.release))} - ${name}`;

    return binderFactory.createTag(patterns, tag);
  }

  /**
   * Return the number of months and years as a string
   * @param d1 Date to compare
   * @returns
   */
  protected getYearsAndMonthsAsString(d1: Date) {
    const months = this.monthDiff(d1, new Date());

    const years = months % 12;
    const remainMonths = Math.floor(months / 12);
    let text = "";

    if (years > 0) text += `${years} ${years > 1 ? "years" : "year"}`;
    if (remainMonths > 0) text += ` ${remainMonths} ${remainMonths > 1 ? "months" : "month"}`;
    return text.trimLeft();
  }

  /**
   * Create a Document on objects
   * @param blocker Blocker to tag
   * @returns True if the document creation
   */
  protected async createDocumentContains(blocker: OssRecommendation): Promise<boolean> {
    const language = getHighlightLanguage(blocker.technology);
    const patternExtractor = PatternExtractorFactory.getPatternExtractor(language);
    const binderFactory = BinderFactor.getBinder(language, blocker.application);

    const basedTitle = patternExtractor.getName(blocker.component);
    const title = `Obsolescence ${this.getYearsAndMonthsAsString(new Date(blocker.release))} ${basedTitle}`;
    const patterns = patternExtractor.getPatterns(blocker.component);
    const gap = this.getYearsAndMonthsAsString(new Date(blocker.release));

    let description = "";

    if (blocker.release == blocker.lastRelease) {
      description = `This component is based on the latest version ( ${blocker.lastRelease} ).
      It introduces a risk due to the age of age of this last version, with a gap of ${gap}.
      You should consider removing this component and replacing it with a newer, supported framework.
      `;
    } else {
      description = `This component should be updated to the latest version ( current ${blocker.release} ).
      You should consider updating it to the latest version ( ${blocker.lastRelease} ) it may introduce a gap of ${gap}.
      `;
    }

    return binderFactory.createDocument(patterns, title, description);
  }
}
