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

title: Advanced Security Services
class: cover

---

title: Advanced Security services

- SSH server access
- Https client authentication

---

title: Advanced Security services

- **SSH server access**
- Https client authentication

---

title: SSH Server access
subtitle: The Problem

- We need to grant access to our instances on AWS to (potentially) all tech team.
- We don't want to:
    - create users for every one (dificult to manage/mantain).
    - mantain a centralized authentication service (LDAP or similars).
    - share the same password with every one neither enable password authentication on servers.
- We need revokation mechanisms for protect the system against credentials loss.

---

title: SSH Server access
subtitle: Public key authentication

First approximation:

- ssh give us the option to authenticate by means of public key authentication

---

title: SSH Server access
subtitle: Public key authentication (setup)

In order to enable, modify /etc/ssh/sshd_config:

<pre><code>
Port 22002
AuthorizedKeysFile      .ssh/authorized_keys
PasswordAuthentication no
ChallengeResponseAuthentication no
PubkeyAuthentication yes
RSAAuthentication yes
</code></pre>

---

title: SSH Server access
subtitle: Public key authentication (setup)

Every user account has to take care of maintaining it ~/.ssh/authorized_keys:

<pre><code>
[ec2-user@ip-10-123-144-214 ~]$ cat .ssh/authorized_keys
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCMXRgD+IcUm70CJlVAKTrZyq4m/GtXbhw5yrKrRZNoNkPiuzMLsznJ2
EKXUySepX9LNSUcxBfGPNqehVWgcmSR1l+Uqv/eIudw/0UUzyLzQ8AbFk6TUXPXXSk2QlDpfHO6Rg21yP3BJXooS+Ruuy
AOedXiQxbEm4XQUZdo2hAL+LkKUSAVcmXc+keH96vlLsd0tYDpwW+Wxf1sIOcga3DW2tFiK4kfr4mIiBLqYYG5ycJvI8n
ZbEDBrqqB4OF+w5vs6M30GR4NE5hTwPzH5AoJaGi/tbodB8H5ESp4DYAAAoSmVDIPX47Q91uWzswEejYYtxGA3rv1ohgC
SUTTKUx3 awsmrfsys
</code></pre>

---

title: SSH Server access
subtitle: Public key authentication (setup)

Useful commands:

<pre><code>
ssh-keygen -t dsa
cat ~/.ssh/id_dsa.pub | ssh -p 22002 pepito@bastion.marfeel.com "cat - >> ~/.ssh/authorized_keys"
</code></pre>

---

title: SSH Server access
subtitle: Public key authentication (setup)

How we use that at Marfeel:

- We keep users public keys on a github repo (pepito.pub)

---

title: SSH Server access
subtitle: Public key authentication (setup)

How we use that at Marfeel:

- We keep users public keys on a github repo (pepito.pub)
- At AMI creation:

<pre><code>
cat $MARFEELHOME/.ssh/*.pub >> /home/ec2-user/.ssh/authorized_keys
chown ec2-user:ec2-user /home/ec2-user/.ssh/authorized_keys
chmod 600 /home/ec2-user/.ssh/authorized_keys
</code></pre>

---

title: SSH Server access
subtitle: Public key authentication (setup)

How we use that at Marfeel:

- We keep users public keys on a github repo (pepito.pub)
- At AMI creation:

<pre><code>
cat $MARFEELHOME/.ssh/*.pub >> /home/ec2-user/.ssh/authorized_keys
chown ec2-user:ec2-user /home/ec2-user/.ssh/authorized_keys
chmod 600 /home/ec2-user/.ssh/authorized_keys
</code></pre>

- Problems:
    - every new user we need to create a new AMI and redeploy all the servers.
    - every time that a key is compromissed, also.

---

title: SSH Server access
subtitle: Certificate authentication

SSH could be set up to accept all certificates signed by a trusted CA.

**Important:** these certificates aren't X509 compliant

---

title: SSH Server access
subtitle: Certificate authentication (setup)

We have to modify /etc/ssh/sshd_config:

<pre><code>
Port 22002
TrustedUserCAKeys       /etc/ssh/MarfeelUserCA.pub
PasswordAuthentication no
ChallengeResponseAuthentication no
PubkeyAuthentication yes
RSAAuthentication yes
</code></pre>

---

title: SSH Server access
subtitle: Certificate authentication (setup)

We have to copy our CA certificate in a place accessible by sshd

<pre><code>
ln -s $MARFEELHOME/etc/ssh/MarfeelUserCA.pub /etc/ssh/MarfeelUserCA.pub
</code></pre>

---

title: SSH Server access
subtitle: Certificate authentication (setup)

Pros:

- Every time that a new user arrives, we only need to generate its id_dsa-cert.pub.
- No AMI modifications
- No server interactions
- No centralized authentication service
- If the user protects its private key (id_dsa) with a key, we are using a strong authentication system.

---

title: SSH Server access
subtitle: Certificate authentication

Pros:

- Every time that a new user arrives, we only need to generate its id_dsa-cert.pub.
- No AMI modifications
- No server interactions
- No centralized authentication service
- If the user protects its private key (id_dsa) with a key, we are using a strong authentication system.

---

title: SSH Server access
subtitle: Certificate authentication

Cons:

- What happens if:
    - a credential is compromised?
    - a user leave the company?

---

title: SSH Server access
subtitle: Certificate authentication (revokation)

SSH give us the option to create a KRL (revokation list).

We have to indicate at  /etc/ssh/sshd_config:

<pre><code>
RevokedKeys             /etc/ssh/revoked_keys
</code></pre>

and we have to copy our CA certificate in a place accessible by sshd

<pre><code>
ln -s $MARFEELHOME/etc/ssh/revoked_keys /etc/ssh/revoked_keys
</code></pre>

---

title: SSH Server access
subtitle: Certificate authentication (revokation)

Ok, we can revoke the credentials of a user but, we have to distribute this ``revoked_keys`` file.
Same problem that we had with ``pepito.pub``

**Yes**, but it is only a file, is for all users in a system and we can automate:

---

title: SSH Server access
subtitle: Certificate authentication (revokation)

Create a crontab:

<pre><code>
echo "1 0 * * * ${MARFEELHOME}/bin/synchosts > /dev/null " >> /var/spool/cron/root
</code></pre>

to run an script

<pre><code>
#!/bin/bash
wget -O /etc/hosts \
        https://raw.github.com/Marfeel/Turing/master/etc/hosts
wget -O /home/marfeel/etc/ssh/revoked_keys \
        https://raw.github.com/Marfeel/Turing/master/etc/ssh/revoked_keys
wget -O /home/marfeel/etc/nginx/certs/MarfeelSystems-crl.pem \
        https://raw.github.com/Marfeel/Turing/master/etc/nginx/certs/MarfeelSystems-crl.pem
</code></pre>

---

title: SSH Server access
subtitle: Certificate authentication (setup)

Useful commands:

<pre><code>
ssh-keygen -b 4096 -t rsa -f MarfeelUserCA \
    -C "MarfeelSSHUsersCA: CA of Marfeel to authenticate user through SSH."
ssh-keygen -s MarfeelUserCA -I username -n ec2-user,username -V +520w \
    -z `date +"%Y%m%d%H%M%S"` username.pub
</code></pre>

---

title: SSH Server access
subtitle: Certificate authentication (setup)

<pre><code>
ssh-keygen -L -f id_dsa-cert.pub
id_dsa-cert.pub:
        Type: ssh-dss-cert-v01@openssh.com user certificate
        Public key: DSA-CERT 2f:7d:84:36:4b:b8:b3:fa:a6:45:b1:d1:30:9d:3f:24
        Signing CA: RSA b6:06:15:38:e8:f4:7a:e1:09:e9:c7:4e:59:d0:d3:28
        Key ID: "jtomas"
        Serial: 0
        Valid: from 2014-11-25T10:07:00 to 2024-11-12T10:08:00
        Principals:
                ec2-user
                jtomas
        Critical Options: (none)
        Extensions:
                permit-X11-forwarding
                permit-agent-forwarding
                permit-port-forwarding
                permit-pty
                permit-user-rc
</code></pre>

---

title: Advanced Security services

- SSH server access
- **Https client authentication**

---

title: Https client authentication
subtitle: What do we want?

Same as SSH authentication but for HTTPS:

Mainly:

- Secure our api (for PUT/POST/DELETE) to Press servers.
- Allow client certificate authentication in insight.

---

title: Https client authentication
subtitle: What do we want?

Same as SSH authentication but for HTTPS:

Mainly:

- Secure our api (for PUT/POST/DELETE) to Press servers.
- Allow client certificate authentication in insight.

The Problem:

- Verify client certificate and give the correct roles

---

title: Https client authentication
subtitle: Connect directly to Tomcat

Tomcat give connector properties to manage **SSL termination**.

- Easy to set up.
- Near out of the box

---

title: Https client authentication
subtitle: Connect directly to Tomcat (setup)

Add to connector to the server.xml file:

<pre><code>
Connector port="443" maxThreads="150"
           scheme="https" secure="true" SSLEnabled="true"
           truststoreFile="server.keystore" truststorePass="password"
           keystoreFile=".keystore" keystorePass="password"
           clientAuth="true" keyAlias="tomcat" sslProtocol="TLS"
</pre></code>

---

title: Https client authentication
subtitle: Connect directly to Tomcat

Problems:

- Our Tomcat will be open to the world (not a good idea).
- All static files will be served by Tomcat (bad smell).
- We loss all Nginx features (re-writes, cache,...)

---

title: Https client authentication
subtitle: Ngins SSL termination

We will terminate SSL in Nginx and Nginx will talk to Tomcat without encrypt.

- Not a big security issue due to it is internal communication.
- Easy to setup
- We can use all Nginx features

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

<pre><code>
server {
        listen                  443 ssl;
        server_name             *.compute.amazonaws.com
                                *.elb.amazonaws.com
                                *.atlantis.mrf.io
                                *.elasticbeanstalk.com;
        ssl_certificate         /etc/nginx/certs/all.compute.amazonaws.com-cert.pem;
        ssl_certificate_key     /etc/nginx/certs/all.compute.amazonaws.com-nopass.key;

        include                 SSLConfiguration.conf;
        include                 genericHub.conf;
}
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

<pre><code>
        ssl_dhparam                     /etc/nginx/certs/dhparam.pem;
        ssl_prefer_server_ciphers       on;
        ssl_protocols                   TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:
                     ...
                     !aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4';

        proxy_headers_hash_max_size             1024;
        proxy_headers_hash_bucket_size          128;
        add_header Strict-Transport-Security    max-age=15768000;
        proxy_set_header            X-Forwarded-Proto   $scheme;
        proxy_set_header        	X-Forwarded-For 	$proxy_add_x_forwarded_for;
        proxy_set_header        	Host            	$http_host;
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

<pre><code>
Connector port="8080" protocol="HTTP/1.1"
            connectionTimeout="20000"
            redirectPort="8443"
            proxyName="localhost"
            proxyPort="443"
            scheme="https"
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

WAIT!! We need client authentication!!

<pre><code>
        ssl_crl                         /etc/nginx/certs/MarfeelSystems-crl.pem;
        ssl_client_certificate          /etc/nginx/certs/MarfeelSystems-cacert.pem;
        ssl_verify_client               optional;
        proxy_set_header                SSL_CLIENT_CERT         $ssl_client_cert;
        proxy_set_header                SSL_CIPHER              $ssl_cipher;
        proxy_set_header                SSL_SESSION_ID          $ssl_session_id;
        proxy_set_header                SSL_CLIENT_VERIFY       $ssl_client_verify;
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

WAIT!! We need client authentication!!

<pre><code>
Connector port="8442" protocol="HTTP/1.1" proxyPort="443"
          maxThreads="150" SSLEnabled="false" scheme="https" secure="true"
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

We need to manage SSL_* client authentication headers:

**SSLValve:** When using mod_proxy_http, the client SSL information is not included in
the protocol (unlike mod_jk and mod_proxy_ajp). To make the client SSL information available
to Tomcat, some additional configuration is required. In httpd, mod_headers is used to add
the SSL information as HTTP headers. In Tomcat, this valve is used to read the information
from the HTTP headers and insert it into the request.

<pre><code>
Valve className="org.apache.catalina.valves.SSLValve"
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

**BIG PROBLEM:** SSLValve is prepared for Apache. Apache and Nginx uses different
format for SSL_CLIENT_CERT. (**Thanks**)

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

**BIG PROBLEM:** SSLValve is prepared for Apache. Apache and Nginx uses different
format for SSL_CLIENT_CERT. (**Thanks**)

We have to do a big modification to our set up:

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

**BIG PROBLEM:** SSLValve is prepared for Apache. Apache and Nginx uses different
format for SSL_CLIENT_CERT. (**Thanks**)

We have to do a big modification to our set up:

<pre><code>
Valve className="com.marfeel.tomcat.SSLValveCustom"
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

**BIG PROBLEM:** HTTP headers do not accept \n character.

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

**BIG PROBLEM:** HTTP headers do not accept \n character.
SSLValve is prepared for Apache. Apache and Nginx uses different
format for SSL_CLIENT_CERT. (**Thanks**)

We have to do a big modification to our set up:

- [SSLValve]
- [SSLValveCustom]

[SSLValve]: https://svn.apache.org/repos/asf/tomcat/tc8.0.x/trunk/java/org/apache/catalina/valves/SSLValve.java
[SSLValveCustom]: https://github.com/Marfeel/Systems/blob/master/SSLValveCustom/src/main/java/com/marfeel/tomcat/SSLValveCustom.java

---

title: Https client authentication
subtitle: Ngins SSL termination (setup)

We have to do a big modification to our set up:
<pre><code>
/* mod_header converts the '\n' into ' ' so we have to rebuild the client certificate */
String strcert0 = mygetHeader(request, sslClientCertHeader);
if (strcert0 != null && strcert0.length()>28) {
    String strcert1 = strcert0.replace(' ', '\n');
</pre></code>
<pre><code>
/* Nginx ssl_client_cert converts the '\n' into '\t' so we have to rebuild the client certificate */
String strcert0 = mygetHeader(request, "ssl_client_cert");
if (strcert0 != null && strcert0.length() > 28) {
    String strcert1 = strcert0.replace('\t', '\n');
</pre></code>

---

title: Https client authentication
subtitle: Ngins SSL termination (ELB)

Ok, that all... We only need to put a Load Balancer in front of Nginx and...

---

title: Https client authentication
subtitle: Ngins SSL termination (ELB)

Ok, that all... We only need to put a Load Balancer in front of Nginx and...

Wait, LB will terminate SSL so, we need to set up this LB to set up all SSL_ header.

---

title: Https client authentication
subtitle: Ngins SSL termination (ELB)

Ok, that all... We only need to put a Load Balancer in front of Nginx and...

Wait, LB will terminate SSL so, we need to set up this LB to set up all SSL_ header.

Ok, we will talk to AWS to put in roadmap...

---

title: Https client authentication
subtitle: Ngins SSL termination (ELB)

The alternative: instruct ELB to resend packets to back-end (Nginx) as SSL intead of
terminate SSL (process HTTPS packet)

---

title: Https client authentication
subtitle: Ngins SSL termination (ELB)

The alternative: instruct ELB to resend packets to back-end (Nginx) as SSL intead of
terminate SSL (process HTTPS packet)

Fortunately, AWS ELB supports PROXY protocol: [TUTORIAL]

[TUTORIAL]: http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/enable-proxy-protocol.html

---

title: Https client authentication
subtitle: PROXY Protocol

The **[PROXY protocol]** was designed to chain proxies / reverse-proxies without losing the client information.
A proxy will use its own IP stack to get connected on remote servers. Because of this,
we lose the initial TCP connection information like source and destination IP and port
when a proxy in involved in an architecture.

[PROXY protocol]: http://blog.haproxy.com/haproxy/proxy-protocol/

---

title: Https client authentication
subtitle: PROXY Protocol nginx setup

<pre><code>
server {
        listen          	443 proxy_protocol ssl;

        ssl_certificate         /etc/nginx/certs/all.wildcard.marfeel.com-cert.pem;
        ssl_certificate_key     /etc/nginx/certs/all.wildcard.marfeel.com-nopass.key;

        include         	SSLConfigurationNoClientAuth.conf;
        include         	common.bc.marfeel.com.conf;
}
</pre></code>

---

title: Https client authentication
subtitle: PROXY Protocol nginx setup

<pre><code>
        real_ip_header                  proxy_protocol;
        real_ip_recursive               on;
</pre></code>

---

title: QUESTIONS
class: cover

