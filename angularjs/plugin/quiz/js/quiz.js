// Wrapper for slickQuiz to function as a simple reveal.js-plugin

const script = document.currentScript;
const scriptURL = script.src;

function init(callback) {
  const styleReset = scriptURL + '/../../css/reset.css';
  const styleQuiz = scriptURL + '/../../css/slickQuiz.css';
  const styleMaster = scriptURL + '/../../css/master.css';
  const scriptJQuery = scriptURL + '/../jquery.min.js';
  const scriptQuiz = scriptURL + '/../slickQuiz.js';

  // loadCSS(styleReset, null);
  loadCSS(styleQuiz, null);
  loadCSS(styleMaster, null);
  loadJS(scriptJQuery, function() {
    loadJS(scriptQuiz, function() {
        callback();
    });
  });
}

function loadCSS(href, callback) {
  var head = document.getElementsByTagName('head')[0];

  var style = document.createElement('link');
  style.href = href;
  style.type = 'text/css';
  style.rel = 'stylesheet';

  if (callback instanceof Function) {
    style.onload = function() {
      callback();
    };
  }

  head.append(style);
}

function loadJS(href, callback) {
  var head = document.getElementsByTagName('head')[0];

  var script = document.createElement('script');
  script.src = href;
  script.type = 'text/javascript';

  if (callback instanceof Function) {
    script.onload = function() {
      callback();
    };
  }

  head.append(script);
}

function prepareQuizzes(options) {
  init(function() {
    $(function () {
      const quizzes = document.querySelectorAll( '[data-quiz]');

      for (var i = 0, len = quizzes.length; i < len; i++) {
        const quizNode = quizzes[i];
        const quizSource = quizNode.textContent;

        eval(quizSource);

        const classname = 'slickQuiz-' + i;

        createQuizStructure(quizNode, classname);

        options.json = quiz;
        $('#' + classname).slickQuiz(options);
      }
    });
  });
}

function createQuizStructure(quizNode, classname) {

  var quizDiv = document.createElement('div');

  quizDiv.innerHTML = `
  <section id="${classname}">
    <div class="row">
      <div class="col">
        <h2 class="quizName"></h2>
        <div class="quizArea">
            <div class="quizHeader">
                <!-- where the quiz main copy goes -->
                <a class="button startQuiz" href="#">Get Started!</a>
            </div>
            <!-- where the quiz gets built -->
        </div>
        <div class="quizResults">
            <p class="quizScore">Correct Answers: <span><!-- where the quiz score goes --></span></p>
            <p class="quizLevel"><span><!-- where the quiz ranking level goes --></span></p>
            <div class="quizResultsCopy">
                <!-- where the quiz result copy goes -->
            </div>
        </div>
      </div>
    </div>
  </section>
  `;

  quizNode.parentNode.insertBefore(quizDiv, quizNode);
}
