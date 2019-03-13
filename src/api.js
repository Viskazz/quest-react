/**
 * @return {}
 */
export function postAnswers(answers) {
    let json = JSON.stringify(answers, '', 2);
    return fetch('http://localhost:3000/answers', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: json
    })
        .then(json => {
            console.log('json:', json)
        })
        .then((data) => {
            console.log('Request succeeded with data: ', data);
        })
        .catch((error) => {
            console.log('Request failed with error: ', error);
        });
}
;

/**
 * @return {questions}
 */
export function fetchQuestions() {
    console.log('Console: questions loading..')
    return fetch('/questions.json')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return json.questions;
        })
        .then((result) => {
            return result;
        })
        .catch(error => {
            console.log('Error loading questions', error)
        })
}
;

/**
 * @return {variants}
 */
export function fetchVariants() {
    console.log('Console: variants loading..')
    return fetch('/variants.json')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return json.variants;
        })
        .then((result) => {
            return result;
        })
        .catch(error => {
            console.log('Error loading variants', error)
        })
}
;

/**
 * @return {settings}
 */
export function fetchSettings() {
    console.log('Console: settings loading..')
    return fetch('/settings.json')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return json.settings;
        })
        .then((result) => {
            return result;
        })
        .catch(error => {
            console.log('Error loading settings', error)
        })
}
;

/**
 * @param {string} message
 */
export function log(message) {
    console.log('Console: ' + message);
}

export function isNumber(n) {
    return !isNaN(+n) && isFinite(n);
}

 
