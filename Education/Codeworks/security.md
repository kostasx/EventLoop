## SECURITY

- [**Security Presentation**](https://kostasx.github.io/EventLoop/Education/Codeworks/presentations/security/)

TIP: For any kind of attack (XSS, CSRF), it might help you google for the term, and then switch to the `Images` Search tab. Most of the times, you'll find really helpful infographics or diagrams, depicting these attacks. They will nicely accompany the articles and documentation and give you a visual overview of the concepts.

Example: https://www.google.com/search?q=csrf&source=lnms&tbm=isch&sa=X

---

#### RESOURCES 

- [What is a Cryptographic Nonce? (Wikipedia)](https://en.wikipedia.org/wiki/Cryptographic_nonce?oldformat=true)

- [Passwords and Hash Functions (Simply Explained)(8 min video)](https://www.youtube.com/watch?v=cczlpiiu42M)
    - Terms & Concepts covered: Salt, Encryption, Hashing, Rainbow Tables, bcrypt, scrypt, arghon2, Brute Force Attacks.

- [Passwords and Hacking: the Jargon of Hashing, Salting and SHA-2 explained](https://www.theguardian.com/technology/2016/dec/15/passwords-hacking-hashing-salting-sha-2)

- [Session vs Token Authentication in 100 Seconds](https://www.youtube.com/watch?v=UBUNrFtufWo)

- [Is an HTTPS query string secure?](https://stackoverflow.com/questions/323200/is-an-https-query-string-secure)
    - "URLs are stored in web server logs - typically the whole URL of each request is stored in a server log. This means that any sensitive data in the URL (e.g. a password) is being saved in clear text on the server" ~ [StackOverflow](https://stackoverflow.com/questions/2629222/are-querystring-parameters-secure-in-https-http-ssl)

- [How Secure Are Query Strings Over HTTPS?](https://blog.httpwatch.com/2009/02/20/how-secure-are-query-strings-over-https/)

- [Cookies vs. Tokens: The Definitive Guide](https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide)

- [Cookie vs Token authentication](https://www.section.io/engineering-education/cookie-vs-token-authentication/)

- [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)

- [Method Override Header: x-method-override or X-HTTP-Method-Override](https://www.hanselman.com/blog/http-put-or-delete-not-allowed-use-xhttpmethodoverride-for-your-rest-service-with-aspnet-web-api)

    - "In certain situations (for example, when the service or its consumers are behind an overzealous corporate firewall, or if the main consumer is a web page), only the GET and POST HTTP methods might be available. In such a case, it is possible to emulate the missing verbs by passing a custom header in the requests." ~ [Source](https://www.oreilly.com/library/view/building-a-restful/9781785285714/ch05s05.html)

- [What is CSRF? (3 minutes)](https://www.youtube.com/watch?v=MBOMBZS2u-I)

- [Preventing CSRF](https://www.hacksplaining.com/prevention/csrf)

- [Cross Site Request Forgery (CSRF or XSRF)(3 min)](https://www.youtube.com/watch?v=m0EHlfTgGUU)

- [Cross-Site Request Forgery (CSRF) Explained (15 min)](https://www.youtube.com/watch?v=eWEgUcHPle0)
