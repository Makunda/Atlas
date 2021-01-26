@echo off

cd .\web-application
call npm run build
echo "Front-end was built successfully"

cd ..

del .\atlas-api\src\views\index.html
del /s .\atlas-api\src\public\js\
xcopy /e /v .\web-application\dist\js .\atlas-api\src\public\js
copy .\web-application\dist\index.html .\atlas-api\src\views\index.html



cd .\atlas-api\
call npm run build
echo "API was built successfully"