function Markdown (str = "") {
	let matches = [
		["(?<=^|\\n)#{1}\\s(.+?)(?:(\\s){([A-z0-9=\"-]+)})?(?=$|\\n)", "<h1$2$3>$1</h1>"],
		["(?<=^|\\n)#{2}\\s(.+?)(?:(\\s){([A-z0-9=\"-]+)})?(?=$|\\n)", "<h2$2$3>$1</h2>"],
		["(?<=^|\\n)#{3}\\s(.+?)(?:(\\s){([A-z0-9=\"-]+)})?(?=$|\\n)", "<h3$2$3>$1</h3>"],
		["(?<=^|\\n)#{4}\\s(.+?)(?:(\\s){([A-z0-9=\"-]+)})?(?=$|\\n)", "<h4$2$3>$1</h4>"],
		["(?<=^|\\n)#{5}\\s(.+?)(?:(\\s){([A-z0-9=\"-]+)})?(?=$|\\n)", "<h5$2$3>$1</h5>"],
		["(?<=^|\\n)#{6}\\s(.+?)(?:(\\s){([A-z0-9=\"-]+)})?(?=$|\\n)", "<h6$2$3>$1</h6>"],
		["\\*{2}(.+?)\\*{2}", "<b>$1</b>"],
		["_{2}(.+?)_{2}", "<u>$1</u>"],
		["(?:\\*){1}([^\\*]+?)(?:\\*){1}", "<i>$1</i>"],
		["(?:_){1}(.+?)(?:_){1}", "<i>$1</i>"],
		["~{2}(.+?)~{2}", "<strike>$1</strike>"],
		["!\\[([^]*?)\\]\\(([^)]*?)\\)(?:(\\s){([A-z0-9=\"-]+)})?", "<img alt=\"$1\" src=\"$2\"$3$4>"],
		["\\[([^]*?)\\]\\(([^)]*?)\\)(?:(\\s){([A-z0-9=\"-]+)})?", "<a href=\"$2\"$3$4>$1</a>"],
		["`{3}([a-z]+)\\n((?:.|\\n)*?)\\n`{3}", "<pre class=\"highlight language-$1\"><code>$2</code></pre>"],
		["(?:`){1}([^`]+?)(?:`){1}", "<code>$1</code>"],
		["\n\n", "</p><p>"]
	];
	this.toHTML = function () {
		for (let match of matches) {
			let r = new RegExp(match[0], "g"),
				t = match[1],
				j = str.match(r),
				i = t.match(/\$(\d+)/g);

			if (j !== null) for (let s of j) {
					let r = new RegExp(match[0], "g");
					let sM = r.exec(s);
					let tR = t;
					if (i !== null) for (let n of i) {
						let index = +n.substr(1);
						let sR = sM[index] === undefined ? "" : sM[index];
						tR = tR.replace(n, sR)
					}
					str = str.replace(s, tR);
				}

		}
		return `<p>${str}</p>`;
	}
}

let terms = `
# Terms of Service

Please read these Terms of Service (hereinafter collectively and individually referred to as the “Terms,” “Terms of Use,” “Terms and Conditions,” “Terms of Use”) before using any of the websites (including https://cloudnode.pro), platforms, services or applications (collectively “Services,” each, a “Website,” “Platform,” “Service,” “Application,” “App”) owned or operated by Cloudnode OÜ and its related companies (the “Company,” “Cloudnode,” “we,” “us,” “our”).

PLEASE BE AWARE THAT THESE TERMS OF SERVICE MIGHT CONTAIN A BINDING ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT WAIVE YOUR RIGHT TO A COURT HEARING AND JURY TRIAL.

## Introduction

These Terms, which include and hereby incorporate the Privacy Policy located at https://cloudnode.pro/privacy (“Privacy Policy,” “Privacy Notice”), are a legal agreement between Cloudnode and you (“you,” “your,” “User,” “Client”).  
By consenting to our Terms, you further accept the law and jurisdiction of Estonia.

If you have a dispute with Cloudnode relating to these Terms or by using our Services, we ask that you communicate with the Company for us to be able to informally resolve the provided dispute. Shall Cloudnode be found unable to do so, both parties, the one presenting the dispute and the Company, agree to go through arbitration or a judicial proceeding at a place of our sole choosing. You shall provide us with a notice in writing beforehand.

In the event any provision of these terms is held to be invalid or unenforceable, then that provision will be limited to the minimum enforcement possible, and the remaining terms held with full effect.

Shall any provision of these Terms and Conditions or any agreement appears to have been destroyed or is legally invalid or otherwise unenforceable, this shall not affect the Terms and Conditions/agreement’s validity in general and the parties shall nevertheless agree that in case of a judiciary trial, the court shall endeavour to affect the parties’ intentions as reflected in the Terms, and the remainder of these Terms shall not entail invalidity. The parties shall replace the provision(s) that in so far as permitted by law correspond(s) to the original provision/agreement’s intent.

Exemptions to these Terms must be agreed to in writing by the Company and shall only apply with respect to the specific agreement to which the exception relates. In case the Conditions and the agreement contain conflicting provisions, the provisions contained in the agreement shall take precedence unless explicitly otherwise stated in either contract.

The original and actual version of the Terms is in English. If you are reading (or by any means otherwise perceiving) a translation of these Terms, the English version shall always take utmost precedence.

## Acceptance of the Terms

By using, accessing, reaching or otherwise obtaining the Services, you agree that you are authorised to accept the Terms on behalf of yourself, the company you represent, or both, where the latter is applicable. All Services are subject to the Terms, and you agree to be bound by these Terms and Conditions. If you do not accept the Terms, do not use, access or obtain the Services.

To accept the Terms, you must be of the minimum age of digital consent in your country and legally liable for your agreement with us. If you are below the age of majority in your jurisdiction or if your age is below 18, your lawful guardian or parent must review and agree to these Terms and accept legal liability on your behalf or on behalf of the company that you represent.

We reserve the full right to modify the Terms at any time with or without informing you before we issue the changes. The new Terms (“Amended Terms”) take action immediately after published. Your continued use, access or obtaining of the Services constitutes your acceptance of and agreement to the Amended Terms. If you do not accept or otherwise object to the Amended Terms, you shall cease using the Services immediately.

## Use of the Services

We grant you a revocable, limited, non-sublicensable, non-transferable, non-exclusive license to use and access the Services, which is subject to your compliance with these Terms of Use. You furthermore concur to not or attempt to:

1.  utilise the Service for any other purpose except as permitted by these Terms;
    
2.  copy, alter, transform, prepare comparable works based upon, distribute, license, trade, convey for a consideration, transfer, endeavour to access, locate or obtain any source code, reverse engineer, decompile, dismantle, or otherwise misuse or exploit the Services, except as explicitly permitted in these Terms of Use or as instructed by us in writing; or
    
3.  use robots, crawlers, automated scripts or similar data aggregation or excerpt tools, unless otherwise authorised by us.
    

We reserve our right to modify or stop providing the Services at any time with or without informing you. We reserve the right to at any time terminate your access to the Services without notice or reason. If you violate the set forth herein Terms, we reserve our right to adjourn or suspend your account. You agree that we need not provide you notice before terminating or suspending your account.

By creating an account, you agree that you are solely responsible for your security credentials and maintaining their confidentiality, such as password, authentication tokens, et cetera and any activity that may occur through the use of your credentials. You agree to inform us at your earliest convenience if you have grounds to believe that your credentials’ confidentiality might be breached. You warrant that the information you provide is accurate and truthful at all times.

The Company prohibits the use of temporary or disposable e-mail addresses, also known as dark e-mail, temp mail, among other unofficial names. In order to preserve your security and prevent potential fraud, we require that all users use a valid and up-to-date e-mail address. You agree that we may not allow you to associate with your account certain e-mails that we find not to be secure, publicly available or, but not limited to, otherwise not private. If creating an account on behalf of a company or a partnership, you may use an e-mail account available to other individuals only if these individuals are part of the same organisation, company or partnership. You agree to receive communication from us (by e-mail, text or other notifications) that directly and explicitly concerns your account or use of the services individually, security, actions on your account (both automatic and manual), as well as other important notifications. We will not subscribe you to any newsletters or mailing lists unless you explicitly permit us to do so. You agree that receiving communication digitally as described above, satisfies any legal requirements that such information is in writing.

The use of the Services for the promotion of or relation and reference to terrorism, political views, unlawful substances, drugs, medication, alcohol, fraudulent or otherwise unlawful activities, threats, forgery or impersonation, cyber-attacks or exploits, pornography, sexual or otherwise intimate activities or contacts involving humans or animals, exploitation or abuse of human beings and/or animals, the harming of humans or animals, graphical content and all other content that might be viewed as inappropriate, discriminatory, abusive or otherwise disturbing.

Our game hosting and web hosting services may only be utilised for their intended purpose, which is for the former to host a virtual server featuring a game platform and for the latter--to make documents, such as HTML documents, or otherwise a website publicly available on the Internet. You may not use these services with intents including storage and archival purposes, which constitutes the uploading of files unrelated to the intended purpose of the Service or otherwise files that are not required by the Service to operate, such as, but not limited to, personal files. Cloudnode may delete such data at any time without informing you or suspend your Service altogether. The Company does not guarantee the accuracy or reliability of the information that is provided within or as part of the Services.

We prohibit the registration of domain names that feature or include inappropriate content, such as sexual and/or pornographic references and inuendos or otherwise vulgarities. Such domain names will be terminated without notice.

Our Services may feature links or references to other services or websites. We are not accountable for nor do we support these third-party websites or the businesses sponsoring such third-party web platforms or their products or services, whether or not the Company is affiliated with these websites or organisations. We assume no responsibility or liability for the contents of links to other websites.

You may at any time request the termination of your account. Any granted by you to us licenses shall survive this termination. To fulfil your request, we may delete your account or anonymise it. We may keep some provisions of your personal information for business interests, including analytical purposes, or due to legal obligations. You acknowledge that you shall not receive any refunds or compensations related to our Services or your use within our Services, such as remaining virtual currency, goods or services.

We do not guarantee that the Services or the Products obtained through the Services will meet your expectations or requirements.

## Terms of Sale

By placing an order or otherwise sending money to the Company, you warrant that you are the bank account’s eligible owner, credit/debit card, or third-party account.

You agree to not open any disputes via a third-party company, website or service, your bank or credit/debit card issuer. Disputes shall only be handled in a confidential manner in private correspondence with the Company or be otherwise closed without the necessity to submit any evidence to the aforementioned third parties. Furthermore, shall you, regardless, open a dispute with a third party without informing us at least seven days in advance, we will likely terminate your account and your access to our services. To contact us about a dispute, please do so by opening a ticket or by sending us digital communication via e-mail to payments@cloudnode.pro.

Upon placing an order, you authorise the Company or the accredited merchant to charge your credit/debit card, bank account or third-party account (for instance, a virtual wallet) the displayed price before the purchase. Please note that we may or may not add additional taxes to the price, such as VAT, transaction fees, et cetera.

Virtual currency can be withdrawn from your account to a credit/debit card, bank account or third-party account only if the amount is five (5) EUR or more. You agree that we subtract a fee of 30% of the value of your withdrawal. You can withdraw virtual currency to a particular payment up to the total amount of all purchases made with that credit/debit card, bank account or other third-party accounts.

You are eligible for full restitution within four hundred and thirty-two (432) hours after your registration on our Platform, amounting to the total sum of money sent to us by you within that timeframe. We are under no obligation to provide any refunds or compensations after this period.

You can cancel a monthly service at any time. The remaining pre-paid full days for this service will be refunded to your account balance. Please note that if a service is cancelled immediately after its creation, you will receive a refund of the remaining days (29) only.

Under no circumstances do we offer refunds for domain names, including if requested within four hundred and thirty-two (432) hours after your registration. If you cancel a domain name before it has expired, the domain name becomes the Company’s property, and you will not be provided with any compensation or refund. The Company may utilise your cancelled domain name solely under its own discretion.

Billing plans which include a free domain will provide you with a domain name of your choice free of charge for one year only. After one year, your domain will renew at its regular price unless it has been cancelled before the renewal. Please note that this promotion is available only in regard to certain TLDs (Top-Level Domains, “domain extensions”). Contact our support team in a ticket or by electronic communication via e-mail at  [support@cloudnode.pro](mailto:support@cloudnode.pro)  to learn more.

You agree that we keep payment records indefinitely and that we may share these records with governments, tax authorities or other instances or institutions that legally require us to do so. We may also share payments records with your credit/debit card issuer, bank account or other third-party account providers in the case of a dispute.

We reserve our rights to modify any published prices, service contents or benefits at any time, with or without informing you. Billing plans that you have subscribed to on a monthly basis will retain the original price, benefits and contents. Billing plans on a yearly basis will retain the original price, benefits and contents for the remainder of the year only.

Purchased gift cards are strictly non-refundable.

When referring clients to use our services via our affiliate system, you will receive in your virtual balance 7% of any purchases of virtual currency that they make. If a client that you have referred exercises their right to any sort of refund, compensation or withdrawal, we will remove 7% of the refunded, compensated or withdrawn to them amount from your account, which could as well lead to a negative virtual balance on your end. We will contact you as soon as any virtual currency is removed.

## Intellectual Property Rights

All rights, title and interest in and to all materials that are part of the Services, including, but not limited to, designs, text, graphics, pictures, video, information, applications, software, music, sound and other files, and their selection and arrangement, hereinafter referred to as the “Service Materials,” are owned by us or our third-party licensors. You acknowledge and agree that you shall not acquire any ownership rights by downloading Service Materials or purchasing any virtual currency, goods, or services.

By uploading or submitting any content to our Services, you grant us a royalty-free, irrevocable, unlimited, sublicensable license to host, modify, adapt, translate, create derivative works based upon or otherwise publish or make publicly available such content as part of our Services and your use of our Services.

When providing feedback, suggestions, feature requests or reporting bugs, errors or, but not limited to, issues, whether in writing or verbally, you warrant that you have the right and legal liability for disclosing that information to us; the information does not infringe any copyright or trademark or otherwise violates any rights, and your information does not breach the confidentiality of other entities or parties or features any proprietary information belonging to other entities or parties. You agree that we are under no obligation to maintain the information you provide to us as confidential or private. You grant us a royalty-free, irrevocable, unlimited, sublicensable license to host, use, alter, transform, translate, create derivative works based upon or otherwise publish or make publicly available within our Services. You agree that we are not in any way responsible for the information that you provide and that our Company is not in any way required to pay for or otherwise compensate you for this information.

## Disclaimer of Warranty and Limitation of Liability

The Company is not affiliated with Minecraft, Mojang AB or Notch Development AB. All brands and trademarks belong to their respective owners. By using our Services, you agree to the Minecraft End User License Agreement, located at  [https://account.mojang.com/documents/minecraft_eula](https://account.mojang.com/documents/minecraft_eula)  as well as any other respective and applicable policies, regulations, license, agreements and practices that Minecraft, Mojang AB or Notch Development AB have made public.

THE SERVICES AND THE SERVICE MATERIALS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. IN ADDITION, WHILE CLOUDNODE ATTEMPTS TO PROVIDE A GOOD USER EXPERIENCE, WE CANNOT AND DO NOT REPRESENT OR WARRANT THAT THE SERVICES WILL ALWAYS BE SECURE OR ERROR-FREE OR THAT THE SERVICES WILL ALWAYS FUNCTION WITHOUT DELAYS, DISRUPTIONS, OR IMPERFECTIONS. THE FOREGOING DISCLAIMERS SHALL APPLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CLOUDNODE SHALL NOT BE LIABLE TO YOU OR ANY THIRD PARTY CLAIMING THROUGH YOU FOR ANY DAMAGES SUFFERED AS A RESULT OF YOUR USING, DISPLAYING, COPYING, OR DOWNLOADING ANY INFORMATION OR MATERIAL CONTAINED ON THE SITE. IN NO EVENT SHALL CLOUDNODE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, EXTRAORDINARY, EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE) HOWEVER ARISING, WHETHER FOR BREACH OR IN TORT, EVEN IF CLOUDNODE HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. THE COMPANY SHALL NOT BE LIABLE TO YOU FOR MORE THAN THE GREATER OF (A) THE AMOUNT YOU HAVE PAID TO US IN ACCORDANCE WITH THESE TERMS IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT A CLAIM OR (B) $100. THE LIMITATIONS AND DISCLAIMERS IN THESE TERMS DO NOT PURPORT TO LIMIT LIABILITY OR ALTER RIGHTS THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, WHICH MEANS THAT SOME OF THE ABOVE DISCLAIMERS AND LIMITATIONS MAY NOT APPLY TO YOU. IN THESE JURISDICTIONS, HEYLO’S LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.`;