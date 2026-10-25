# SauceDemo Login

## Application Overview

Validate the SauceDemo login form at https://www.saucedemo.com/ for successful authentication, locked users, required-field validation, and invalid credentials.

## Test Scenarios

### 1. Login flow

**Seed:** ``

#### 1.1. Successful login with standard_user

**File:** `tests/login/saucedemo-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login form is visible with Username, Password, and Login controls.
  2. Enter `standard_user` in the Username field.
    - expect: The Username field contains `standard_user`.
  3. Enter `secret_sauce` in the Password field.
    - expect: The Password field contains the supplied password.
  4. Click the Login button.
    - expect: The user is navigated to `/inventory.html`.
    - expect: The inventory page is displayed.

#### 1.2. Locked-out user cannot log in

**File:** `tests/login/saucedemo-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login form is visible.
  2. Enter `locked_out_user` as the username and `secret_sauce` as the password.
    - expect: Both fields contain the supplied values.
  3. Click the Login button.
    - expect: The user remains on the login page.
    - expect: An alert displays `Epic sadface: Sorry, this user has been locked out.`.

#### 1.3. Empty username is rejected

**File:** `tests/login/saucedemo-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login form is visible.
  2. Leave Username empty and enter `secret_sauce` in Password.
    - expect: The Username field is empty.
    - expect: The Password field contains the supplied password.
  3. Click the Login button.
    - expect: The user remains on the login page.
    - expect: An alert displays `Epic sadface: Username is required`.

#### 1.4. Empty password is rejected

**File:** `tests/login/saucedemo-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login form is visible.
  2. Enter `standard_user` in Username and leave Password empty.
    - expect: The Username field contains `standard_user`.
    - expect: The Password field is empty.
  3. Click the Login button.
    - expect: The user remains on the login page.
    - expect: An alert displays `Epic sadface: Password is required`.

#### 1.5. Invalid credentials are rejected

**File:** `tests/login/saucedemo-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login form is visible.
  2. Enter an unrecognized username such as `invalid_user` and password `secret_sauce`.
    - expect: Both fields contain the supplied values.
  3. Click the Login button.
    - expect: The user remains on the login page.
    - expect: An alert displays `Epic sadface: Username and password do not match any user in this service`.
