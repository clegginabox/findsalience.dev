# syntax=docker/dockerfile:1

ARG PHP_VERSION=8.4
ARG FRANKENPHP_VERSION=1

FROM dunglas/frankenphp:${FRANKENPHP_VERSION}-php${PHP_VERSION} AS base

ENV SERVER_NAME=":80"

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
        git \
        unzip \
        libicu-dev \
        libzip-dev \
    && rm -rf /var/lib/apt/lists/*

RUN install-php-extensions \
        intl \
        opcache \
        zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

FROM base AS dev

ENV APP_ENV=dev XDEBUG_MODE=off
RUN install-php-extensions xdebug

FROM base AS prod

ENV APP_ENV=prod

COPY composer.* symfony.lock ./
RUN composer install --no-dev --no-scripts --no-progress --prefer-dist --no-interaction

COPY . .
RUN composer dump-autoload --classmap-authoritative --no-dev \
    && composer run-script post-install-cmd --no-dev \
    && chown -R www-data:www-data var
