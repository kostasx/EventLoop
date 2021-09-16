- From kid to grown up: change your mentality. Security must always accompany your coding habits
- After graduation: security should always accompany your coding (along with performance and readability)

- Security is a broad subject.
- Security Experts
- Terminology can be intimidating and confusing

- All user input is evil! Guilty until proven innocent
    - Think like the pandemic! Sanitize / Validate (incoming/outgoing data)
    - Do I have user input? Are there any ways that this input can be parsed or used in unintended ways? e.g form input contains <script> code

- Always check on both ends (FE/BE). NEVER forget the BE.

    - There's no point in enforcing a strong password policy on the Frontend, if the same policy is not implemented on the Backend as well. Remember: users can view and manipulate Frontend code.
    - Example: input maxsize="12 --> Server might blow if it receives something over 12 characters. You need BE protection for this. Don't rely on the backend.

- Start with a strict/restrictive policy: 0 to minimal access, and gradually open the doors to features and functionality on a as-needed basis. 
- Give your server and services the minimum privileges. Grant higher privileges with caution and only if needed. 
- Does your server or services require root/administrator privileges? 
- Do your users need to be authenticated for a particular feature/functionality?
- Do your authenticated users need special roles for a particular feature/functionality?

- Do not share sensitive information (e.g. API keys and secrets, passwords, Error messages, etc.) in public-facing apps and web sites and try to avoid storing them on the client-side unencrypted (cache, cookies, etc.)
- Are you using secure channels to send or receive sensitive information (HTTPS/TLS vs HTTP)?

    - Badly written code (no linters, no standards, no best practices, etc.) is prone to security vulnerabilities 
    - Keep learning and studying the field of Web Security. There's more ground to explore.
    - Don't reinvent the (security) wheel. Use well-trusted, broadly used and up-to-date security libraries and frameworks to secure your apps.