title: Security services
class: cover

---

title: Security services

- Authentication
- Authorization / Access control
- Data Confidentially
- Data Integrity
- Non-repudiation
- Privacy

---

title: Authentication

**Authentication** is the process of determining whether someone or something is, in fact, who or what it is declared to be.

---

title: Authentication

**Authentication** is the process of determining whether someone or something is, in fact, who or what it is declared to be.

What do authentication methods use to authenticate us?

- Something you are
- Something you know
- Something you do/have

---

title: Authentication

**Authentication** is the process of determining whether someone or something is, in fact, who or what it is declared to be.

What do authentication methods use to authenticate us?

- Something you are
- Something you know
- Something you do/have

Examples?

---
title: Authentication
subtitle: Types of Authentication

- **weak:** Use only 1 method.
- **strong:** Use, at least, 2 methods.

---

title: Authentication
subtitle: Types of Authentication

- **weak:** Use only 1 method.
- **strong:** Use, at least, 2 methods.

Discussion:

- Login+pwd?
- Coordinates card?
- Certificates?

---

title: Authorization / Access Control

**Authorization** is the function of specifying access rights to resources related to information security and computer
security in general and to access control in particular

Usually controlled by the application.

---

title: Authorization / Access Control

**Authorization** is the function of specifying access rights to resources related to information security and computer
security in general and to access control in particular

Usually controlled by the application.

Examples:

- rwxr-xrw-
- ACL: Access control list
- Roles

---

title: Data Confidentiality

**Data Confidentiality** is whether the information stored/transmitted on a system is protected against unintended or unauthorized access.
 Since systems are sometimes used to manage sensitive information, Data Confidentiality is often a measure of the ability of the system to protect its data.

---

title: Data Confidentiality
subtitle: Methods

We **encrypt/cypher** data in order to protect its confidentiallity.

---

title: Data Confidentiality
subtitle: Methods

We **encrypt/cypher** data in order to protect its confidentiallity.

Type of cyphers:

- symmetric key: we use the **same** key to encrypt and decrypt

---

title: Data Confidentiality
subtitle: Methods

We **encrypt/cypher** data in order to protect its confidentiallity.

Type of cyphers:

- symmetric key: we use the **same** key to encrypt and decrypt
- public key: we use **2 different keys (public and private/secret)**.

---

title: Data Confidentiality
subtitle: Methods

We **encrypt/cypher** data in order to protect its confidentiallity.

Type of cyphers:

- symmetric key: we use the **same** key to encrypt and decrypt
- public key: we use **2 different keys (public and private/secret)**.
    - when we encrypt using **public key**, only **private key** can be used to decrypt.

---

title: Data Confidentiality
subtitle: Methods

We **encrypt/cypher** data in order to protect its confidentiallity.

Type of cyphers:

- symmetric key: we use the **same** key to encrypt and decrypt
- public key: we use **2 different keys (public and private/secret)**.
    - when we encrypt using **public key**, only **private key** can be used to decrypt.
    - when we encrypt with **private key**, we have to use **public key** to decrypt.

---

title: Data Confidentiality
subtitle: symmetric key

- These type of chypers are really fast.

---

title: Data Confidentiality
subtitle: symmetric key

- These type of chypers are really fast.
- Some names: DES (deprecated), Triple-DES (deprecated), IDEA  (AES candidate), AES (standard),...

---

title: Data Confidentiality
subtitle: symmetric key

- These type of chypers are really fast.
- Some names: DES (deprecated), Triple-DES (deprecated), IDEA  (AES candidate), AES (standard),...

**Problem:** how we share the keys?

---

title: Data Confidentiality
subtitle: public key

- These type of chypers are slow.

---

title: Data Confidentiality
subtitle: public key

- These type of chypers are slow.
- We usually use for:
    - interchange symetric keys,
    - authentication processes,
    - non-repudiation

---

title: Data Confidentiality
subtitle: public key

- These type of chypers are slow.
- We usually use for:
    - interchange symetric keys,
    - authentication processes,
    - non-repudiation
- Some names: Diffie-Hellman, RSA, ElGamal, Elliptic Curve (ECDSA, ECIES),...

---

title: Data Confidentiality
subtitle: public key

- These type of chypers are slow.
- We usually use for:
    - interchange symetric keys,
    - authentication processes,
    - non-repudiation
- Some names: Diffie-Hellman, RSA, ElGamal, Elliptic Curve (ECDSA, ECIES),...

**Problem:** Now it is easy to share **public key** (due to it is **public**) but, how we can garantee
that this public key is the real public key of Alice?

---

title: Data Confidentiality
subtitle: Certification Authority (CA)

- Certifies that a public key is the real public key of Alice.
- CA creates a **certificate** which binds Alice to its public key.
- Every one who trusts to this CA will trusts in this certificate.

Note: we need more tools. We will return to this concept.

---

title: Data Integrity

Data integrity refers to maintaining and assuring the accuracy and consistency of data over its entire
life-cycle, and is a critical aspect to the design, implementation and usage of any system which stores,
processes, or retrieves data.

---

title: Data Integrity
subtitle: Methods

**Cryptographic Hash**: takes m of **variable lenght** as input and produced fixed length value, H(m)

---

title: Data Integrity
subtitle: Methods

**Cryptographic Hash**: takes m of **variable lenght** as input and produced fixed length value, H(m)

Properties:

- computationally infeasible to find two different messages, x and y such that H(x) = H(y)
- given m = H(x), can not determine x.
- really fast to compute

---

title: Data Integrity
subtitle: Methods

Some names:

- MD5: Deprecated -> successful attacks
- SHA-0: Deprecated -> successful attacks
- SHA-1: Deprecated -> theoretical attacks
- SHA-256: Secure
- SHA-3: Next generation

---

title: Non-repudiation

**Nonrepudiation** is the assurance that someone cannot deny something. Typically, nonrepudiation refers
to the ability to ensure that a party to a contract or a communication cannot deny the authenticity of
their signature on a document or the sending of a message that they originated.

---

title: Non-repudiation
subtitle: Digital signature

- When sender digitally signs a document, establishes he is document owner/creator/...
- Verifiable and nonforgeable: recipient (Alice) can prove to someone that Bob,
and no one else (including Alice), must have signed document.

---

title: Non-repudiation
subtitle: Methods

Digital signature uses **hash** and **public key cipher**.

So, Bob will calculate the digital signature of a document **m** doing k_s_B(H(m)).

Note that first Bob will generate tha hash of the document and, then, will encrypt this hash with
her secret key.

---

title: Non-repudiation
subtitle: Methods

Digital signature uses **hash** and **public key cipher**.

Alice will receive m and k_s_B(H(m)).

In order to verify this signature Alice will:

- calculate H'(m),
- decrypt k_s_B(H(m)) using Bob's public key
    - k_p_B(k_s_B(H(m))) = H(m)
- H'(m) == H(m) ?

---

title: Data Confidentiality
subtitle: Certification Authority (CA)

- Certifies that a public key is the real public key of Alice.
- CA creates a **certificate** which binds Alice to its public key.
- Every one who trusts to this CA will trusts in this certificate.

**Now we have the tools**

---

title: Data Confidentiality
subtitle: Certificate

A digital certificate contains, mainly:

- the identity of the user
- the public key of this user (k_s)
- a period in which this certificate **is not** valid
- the identity of issuer (that is the CA id)
- the digital signature of k_s by CA


---

title: Data Confidentiality
subtitle: Certificate

A digital certificate contains, mainly:

- the identity of the user
- the public key of this user (k_s)
- a period in which this certificate **is not** valid
- the identity of issuer (that is the CA id)
- the digital signature of k_s by CA

**Problem:** Now it is easy to share **public key** (due to it is **public**), CA garantees
that this public key is the real public key of Alice, but, how we know that this CA really
signs this public key?

---

title: Data Confidentiality
subtitle: Certificate

**Problem:** Now it is easy to share **public key** (due to it is **public**), CA garantees
that this public key is the real public key of Alice, but, how we know that this CA really
signs this public key?

**SO**, finally we need to trust with somebody, otherwise, the PKI (public key infrastructure) does
**not** work.

Who is this trusted part?

---

title: Privacy

**Privacy** is the ability of an individual or group to **seclude** themselves, or information
about themselves, and thereby express themselves selectively.

DO NOT confuss with confidentaility

---

title: Security services
class: cover
