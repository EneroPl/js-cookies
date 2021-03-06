<h1>js-cookie</h1>
js-cookie is a helper package for interacting with cookies stored in the browser, written entirely in native JavaScript methods.
<h2>How work with it</h2>
At the moment, the package defines several methods for working with cookies: Set, Get, Remove.
<h2>Install & Usage</h2>
To install package:

```javascript

npm i --save-dev @eneropl/js-cookies

```
To use package:

```javascript

import cookies from '@eneropl/js-cookies'

```

<h2><code>cookies.set(key, value, [options])</code></h2>
If you do not specify the required parameters of the method or the parameters will be invalid, then the setting of the cookie will be rejected, and the function will return false, otherwise, if the cookie is created successfully, the function will return true. When writing a cookie, if a cookie with the corresponding key already exists, the method will update the key value. Ultimately, the cookie will update its value without creating a duplicate.
<br><br>
<table>
  <caption>Information about the parameters passed to the setCookie method</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>key</code></td>
      <td><code>String</code></td>
      <td><code>true</code></td>
      <td><p>a key that defines the name of your cookie. In the future, the corresponding key is used for actions with this cookie</p></td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td><code>any</code></td>
      <td><code>true</code></td>
      <td>the value that the cookie will store. If no value is specified, the creation of a cookie will be rejected</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td><code>String, Object</code></td>
      <td><code>false</code></td>
      <td>optional function parameter defining cookie parameters according to properties used by the browser</td>
    </tr>
  </tbody>
</table>
<br>
<table>
  <caption>The options object takes parameters that are used to define the cookie properties according to the specification. Below is only a small part of the options that can be passed along with the value.</caption>
  <thead>
    <tr>
      <th>Key</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>expires</code></td>
      <td><code>String, Date</code></td>
      <td>It maintains the state of a cookie up to the specified date and time.</td>
    </tr>
    <tr>
      <td><code>maxAge</code></td>
      <td><code>String, Number</code></td>
      <td>It maintains the state of a cookie up to the specified time. Here, time is given in seconds.</td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td><code>String</code></td>
      <td>It expands the scope of the cookie to all the pages of a website.</td>
    </tr>
    <tr>
      <td><code>domain</code></td>
      <td><code>String</code></td>
      <td>It is used to specify the domain for which the cookie is valid.</td>
    </tr>
  </tbody>
</table>
<h3>Example</h3>

```javascript
const userDeail = {
  name: 'Alex',
  age: 20
};

cookies.set('user', userDetail, {
  // This cookie will be stored for 1 hour
  maxAge: 3600,
  path: '/;
}); // true
```
<h2><code>cookies.get(key)</code></h2>

Getting the cookie value for the specified <code>key</code>. If the function finds a cookie with the specified key, the function will return a value, otherwise false.
<h3>Example</h3>

```javascript
// In cookie storage "name=Alex;"
cookies.get('name'); // Alex
cookies.get('someCookie'); // false
```

<h2><code>cookies.delete(key, [options])</code></h2>

Removes the cookie for the given key. If there is access and the cookie was successfully deleted, the function will return true, otherwise false. Also, there are cases when, to delete a cookie, you need to specify additional defining cookie parameters that were specified when the cookie was created or defined in the cookie parameters (see developer console), in which case the <code>options</code> conditional parameter is used to explicitly indicate the cookie.
<h3>Example</h3>

```javascript
// In cookie storage "name=Alex; age=20", when age from different domain or httpOnly.
cookies.delete('name') // true. Cookie deleted successfully.
cookies.delete('age') // false. Available cookie with "age" doesn't exist to delete.
```
