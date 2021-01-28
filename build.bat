@echo off

echo Launching npm install
call npm install
if errorlevel 1 ( 
	echo Failed to run 'npm install'
	exit
)
echo Install done !

echo Installing alias module
call npm install -g module-alias
echo Installation done !

echo Building the front-end application...
cd .\web-application
call npm run build
if errorlevel 1 ( 
	echo Unsuccessful build of the front-end
	exit
)

echo Front-end was built successfully !


cd ..
echo Building the backend api...
del /Q .\atlas-api\src\views\index.html
del /s /Q .\atlas-api\src\public\js\
xcopy /e /v .\web-application\dist\js .\atlas-api\src\public\js
copy .\web-application\dist\index.html .\atlas-api\src\views\index.html



cd .\atlas-api\
call npm run build
if errorlevel 1 ( 
	echo Failed to build the API... 
	exit
)
echo Building done !