# Laravel + React Project

## To Install React Dependence
```
npm install 
```

## To Install Laravel Dependence
```
composer install
```

## Databse Name In .env file
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=Databsename
DB_USERNAME=Username
DB_PASSWORD=password
```

## Run below command to run migration
```
php artisan migrate
```
```
If you do not want to run the migrate command then import the laravelreact.sql file located in the project root folder.
```

## Run below command to run project on local server.
```
php artisan serve
```

## In case you are getting error at the time of setup then you can run below commands.
```
php artisan cache: clear
php artisan config: clear
php artisan cache: clear
```
