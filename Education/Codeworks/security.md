# SECURITY

- [**Security Presentation**](https://kostasx.github.io/EventLoop/Education/Codeworks/presentations/security/)

TIP: For any kind of attack (XSS, CSRF), it might help you google for the term, and then switch to the `Images` Search tab. Most of the times, you'll find really helpful infographics or diagrams, depicting these attacks. They will nicely accompany the articles and documentation and give you a visual overview of the concepts.

Example: https://www.google.com/search?q=csrf&source=lnms&tbm=isch&sa=X

---

#### RESOURCES 

- [What is a Cryptographic Nonce? (Wikipedia)](https://en.wikipedia.org/wiki/Cryptographic_nonce?oldformat=true)

- [Passwords and Hash Functions (Simply Explained)(8 min video)](https://www.youtube.com/watch?v=cczlpiiu42M)
    - Terms & Concepts covered: Salt, Encryption, Hashing, Rainbow Tables, bcrypt, scrypt, arghon2, Brute Force Attacks.

- [Passwords and Hacking: the Jargon of Hashing, Salting and SHA-2 explained](https://www.theguardian.com/technology/2016/dec/15/passwords-hacking-hashing-salting-sha-2)

- [Session vs Token Authentication in 100 Seconds (YouTube)](https://www.youtube.com/watch?v=UBUNrFtufWo)

- [Is an HTTPS query string secure?](https://stackoverflow.com/questions/323200/is-an-https-query-string-secure)
    - "URLs are stored in web server logs - typically the whole URL of each request is stored in a server log. This means that any sensitive data in the URL (e.g. a password) is being saved in clear text on the server" ~ [StackOverflow](https://stackoverflow.com/questions/2629222/are-querystring-parameters-secure-in-https-http-ssl)

- [How Secure Are Query Strings Over HTTPS?](https://blog.httpwatch.com/2009/02/20/how-secure-are-query-strings-over-https/)

- [Cookies vs. Tokens: The Definitive Guide](https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide)

- [Cookie vs Token authentication](https://www.section.io/engineering-education/cookie-vs-token-authentication/)

- [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)

- [Method Override Header: x-method-override or X-HTTP-Method-Override](https://www.hanselman.com/blog/http-put-or-delete-not-allowed-use-xhttpmethodoverride-for-your-rest-service-with-aspnet-web-api)

    - "In certain situations (for example, when the service or its consumers are behind an overzealous corporate firewall, or if the main consumer is a web page), only the GET and POST HTTP methods might be available. In such a case, it is possible to emulate the missing verbs by passing a custom header in the requests." ~ [Source](https://www.oreilly.com/library/view/building-a-restful/9781785285714/ch05s05.html)

- [What is CSRF? (YouTube: 3 minutes)](https://www.youtube.com/watch?v=MBOMBZS2u-I)

- [Preventing CSRF](https://www.hacksplaining.com/prevention/csrf)

- [Cross Site Request Forgery (CSRF or XSRF)(YouTube: 3 min)](https://www.youtube.com/watch?v=m0EHlfTgGUU)

- [Cross-Site Request Forgery (CSRF) Explained (YouTube: 15 min)](https://www.youtube.com/watch?v=eWEgUcHPle0)

- **Reflected XSS vs Stored XSS**

    - **Stored XSS (Persistent XSS)**: Attacker injects malicious content (payload, e.g. JavaScript code) into the target application, for example through an non-validated blog comment input field. The victim opens the affected target application and the attack payload is executed on the victim's browser.

    - **Reflected XSS (Non-persistent XSS)**: In this case, the attacker’s payload has to be a part of the request that is sent to the web server. It is then reflected back in such a way that the HTTP response includes the payload from the HTTP request. Attackers use malicious links, phishing emails, and other social engineering techniques to lure the victim into making a request to the server. The reflected XSS payload is then executed in the user’s browser. Reflected XSS is not a persistent attack, so the attacker needs to deliver the payload to each victim. These attacks are often made using social networks.

    - [(Source)](https://www.acunetix.com/websitesecurity/xss/)

- **CSRF Protection** using [csurf npm](https://www.npmjs.com/package/csurf)
    - [How csurf middleware validates tokens?](https://stackoverflow.com/questions/57812757/how-csurf-middleware-validates-tokens#answer-57815590)
    - [CSURF Tutorial for Express and Postman](https://www.youtube.com/watch?v=VrFNbqSUVP0)
