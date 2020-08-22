/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

async function defineFriends() {
    try {
      
      //Adding seeded data to webpage
      const result = await fetch('/api')
      const data = await result.json();

      data.forEach(obj => {
        const friends = document.getElementById("friendsList");
        const li = document.createElement('li')
        const list = `
        <strong>${obj.name}</strong><br>
        <p>${obj.rating}</p>
        <button id="rankUp${obj.name}" type="submit">+</button>
        <button id="rankDown${obj.name}" type="submit">-</button>
        <button id="delFriend${obj.name}" type="submit">x</button>
        `
        li.innerHTML = list;
        friends.append(li);
      })

      //Creating new user
      const myForm = document.getElementById('myForm');
      myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = event.target.fname.value;
        const currentFriends = data.map(obj => obj.name)

        if(name === ''){
          alert('Please enter a valid name.')
        } else if (currentFriends.includes(name)) {
          alert('Name already exists! Please enter a valid name.')
        } else {
          fetch('/api', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name}),
          }).then(res => res.json())
        }
      });

      //Update user's rank
      const rankUp = document.getElementById('rankUp');
      rankUp.addEventListener('click', (event) => {
            let data = data.rating;
            rating+=1;   
            fetch('/api/'+ name, {
                method: 'put',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rating: rating
                })
            }) 
      })

      const rankDown = document.getElementById('rankUp');
      rankDown.addEventListener('click', (event) => {
            let data = data.rating;
            rating-=1;   
            fetch('/api/'+ name, {
                method: 'put',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rating: rating
                })
            }) 
      })
      
      //Deleting a user
      const deleteUser = document.querySelector('strong');
      deleteUser.addEventListener('click', function(event) {
        event.preventDefault();
        
        const deletedPerson = event.target.remove();

        fetch('/api', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({deletedName}),
        }).then(res => res.json())
        });



    } catch (error) {
      console.error(error);
    }
  }

  defineFriends();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map