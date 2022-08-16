# Sample Node Application
  ```
  Prerequistes:
    - Docker
    - pack CLI (If using buildpack)

  Application  Properties:  
    Listening PORT: 3000
    Default Path: /
  
  Configuration files:
    Procfile: Specifying Entrypoint in buildpack
    Makefile: Script for building/running docker images conveniently

  Environment Variable Availale:
    SAMPLE_SECRET
    SAMPLE_PARAMETER
    PACKAGE_MANAGER
    config_path (location of .env file as a runtime argument)

  ```
---
## Build Docker image:
  ```bash
  make docker
  ```

## Run Docker image:
  ```bash
  make run
  ```
---

## Build Docker image with paketo buildpack builder.
  ```bash
  make paketo
  ```

---

## Build Docker image with google buildpack builder.
  ```bash
  make google
  ```
  | Support for Node version 18.x.x is not available at the time of writing.  

---

## Build Docker image with heroku buildpack builder.
  ```bash
  make heroku
  ```
---

## Cleanup Docker Contianer and Image.
  ```bash
  make clean
  ```
---
