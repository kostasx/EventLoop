## Work in progress...

## SOFTWARE PRINCIPLES & DESIGN PATTERNS

- **CQRS** / **Command Query Responsibility Segregation**

    - _"The CQRS principle states that every method should either be a command that performs an action, or a query that returns data to the caller, but not both. In other words, Asking a question should not change the answer.[1] More formally, methods should return a value only if they are referentially transparent and hence possess no side effects._" / [Source: Wikipedia](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation)

---
## TERMINOLOGY

- **CQRS** / **Command Query Responsibility Segregation** Pattern: 
    - 
    - _"The notion that you can use a different model to update information than the model you use to read information. For some situations, this separation can be valuable, but beware that for most systems CQRS adds risky complexity."_ / [Source: Martin Fowler](https://martinfowler.com/bliki/CQRS.html)