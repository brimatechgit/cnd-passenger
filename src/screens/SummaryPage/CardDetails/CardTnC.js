import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'

const CardTnC = () => {
    return (
        <ScrollView >
            <Text> TERMS AND CONDITIONS FOR USERS</Text>
            <Text style={styles.tncText}>These terms and conditions (“terms and conditions”) set out the basis on which you are allowed to use
            our website and/or the app, subscribe to and use the services, and constitute the terms of our agreement
            with you, if you continue to use this website and/or the app or subscribe to and use any of the services.</Text>
            
            
            <Text style={{textAlign:'center', color:'red', fontWeight:'bold'}}>IMPORTANT NOTICE –</Text>

            <Text style={[styles.tncText, {color:'red', fontWeight:'bold'}]}>PLEASE READ OUR TERMS AND CONDITIONS OF USE OF OUR WEBSITE AND/OR THE APP, THE SUBSRIBTION TO AND USE OF THE SERVICES</Text>
            
            <Text style={styles.sectionHeader}>1. INTRODUCTION</Text>
            <Text style={styles.tncListItems}>1.1 We are ClicknDeliver an online technology platform which connects users with drivers for fast, reliable and efficient delivery of packages and/or goods in South Africa, for South African customers.</Text>
            <Text style={styles.tncListItems}>1.2 We are developed, operated and owned by BRIMA TECHNOLOGIES (PTY) LTD, based in South Africa and trading as BRIMA TECH (“we/us/our”). We are a private company incorporated in accordance with the laws of the Republic of South Africa with registration number 2015/255646/07 and situated at 5 Marlin Road, Jet Park, 1459.</Text>
            <Text style={styles.tncListItems}>1.3 Your use of www.clickndeliver.co or via any Smartphone Applications (“the app”) will be subject to the then current version of these terms and conditions published on the app and/or on the website at www.clickndeliver.co at the time of your use.</Text>
            <Text style={styles.tncListItems}>1.4 Every person that accesses or uses the app, including each user who registers an account with us (“you/your/registered user”) are bound by these terms and conditions. By using the app and/or by clicking on the “Register Now” button on the app, you acknowledge that you have read and understood these terms and conditions and that you agree to be bound thereto.</Text>
            <Text style={styles.tncListItems}>1.5 These terms and conditions might apply to users who are consumers for purposes of the Consumer Protection Act, 68 of 2008 (the “CPA”). Please note that these terms and conditions contain specific provisions which limit our liability, allocate risk or liability to you or constitute acknowledgement of facts by you and such terms and conditions have been highlighted in bold and requires your special attention as they limit your ability to recover losses that you may incur in connection with your use of the app and/or the services.</Text>
            <Text style={styles.tncListItems}>1.6 You must be 18 years or older to use and/or access our website and / or app and / or the services. By using the website and / or the app and / or the services you warrant that you are 18 (eighteen) years or older.</Text>
            <Text style={styles.tncListItems}>1.7 We may change these terms and conditions from time to time and such changes will take effect as and when published on our website and/or the app. Therefore, you must always read the terms and conditions prior to using the app and/or accessing and/or using the services as the then current version of the terms and conditions will apply to your use of the app and/or the access and/or use of the services.</Text>
            <Text style={styles.tncListItems}>1.8 If you do not agree to these terms and conditions, please do not use the app and/or access and/or use the services. If there is any provision in these terms and conditions that you do not understand, please ask us to explain it to you before you accept the terms and conditions or continue using the app. Nothing in these terms and conditions is intended or must be understood to unlawfully restrict, limit or avoid any right or obligation, as the case may be, created for either you or us in terms of the CPA.</Text>
            <Text style={styles.tncListItems}>1.9 Your use of any information on the app and/or access and/or use of the services is entirely at your own risk, and we shall not be liable for the same.</Text>
            <Text style={styles.tncListItems}>1.10 Unauthorized use of the app and/or the services may give rise to a claim for damages and/or may be a criminal offence.</Text>
            <Text style={styles.tncListItems}>1.11 The app and the services create a technology platform that allows users to arrange and schedule courier services with independent third party contractors, who are under agreement with us or with certain of our affiliates. You acknowledge that we do not provide courier services or function as public or common carrier in relation to the carriage of goods and that all such services are provided by independent third party contractors who are not employed by us.</Text>
            <Text style={styles.tncListItems}>1.12 ClicknDeliver shall take all reasonable steps to protect the personal information of users. For the purpose of this clause, “personal information” shall be defined as detailed in the Promotion of Access to Information Act 2 of 2000 (PAIA). The PAIA may be downloaded from: http://www.polity.org.za/attatchement.php?aa_id=3569.</Text>

            <Text style={styles.sectionHeader}>2. INTERPRETATION AND DEFINITIONS</Text>
<Text style={styles.tncListItems}>The following terms shall have meaning assigned to them:</Text>

            <Text style={styles.tncListItems}>2.1 “applicable law” means all laws, statutes, ordinances, by-laws or other legislative measures relevant and applicable to the implementation of these terms and conditions;</Text>
            <Text style={styles.tncListItems}>2.2 “business day” means any day other than a Saturday, Sunday or public holiday in South Africa;</Text>
            <Text style={styles.tncListItems}>2.3 “business hours” means the hours between 08h00 and 17h00 on a business day;</Text>
            <Text style={styles.tncListItems}>2.4 “collection address” means the physical address at which a package must be collected, as set out in your order;</Text>
            <Text style={styles.tncListItems}>2.5 “driver/s” means a third party driver/s offering a courier service to you, being the services, through the app;</Text>
            <Text style={styles.tncListItems}>2.6 “delivery address” means the physical address at which the package must be delivered, as set out in your order;</Text>
            <Text style={styles.tncListItems}>2.7 “order” means a request submitted by you on the app for the services;</Text>
            <Text style={styles.tncListItems}>2.8 “package” means the goods and/or items you need require to be collected and delivered by the driver/s through the app;</Text>
            <Text style={styles.tncListItems}>2.9 “personal information” means any information that falls within the definition of ‘personal information’ as defined in the Protection of Personal Information Act, 4 of 2013 (“POPIA”) and shall include but not be limited to, information in respect of an individual, such individual’s name, email addresses, telephone/mobile number/s, physical addresses, VAT number and Company registration number (if applicable) and credit or debit card details;</Text>
            <Text style={styles.tncListItems}>2.10 “services” means the collection and delivery service made available by a driver, which is requested through the use of the app and as set out in your order; and</Text>
            <Text style={styles.tncListItems}>2.11 “VAT” means value added tax as defined in the Value Added Tax Act, Act 89 of 1991, as amended from time to time.</Text>

            <Text>3. REGISTRATION AND USE OF THE APP</Text>
            <Text style={styles.tncListItems}>3.1 Only registered users may access and/or use the services through the app.</Text>
            <Text style={styles.tncListItems}>3.2 To register as a user, you must provide a unique username and password and provide certain personal information to us.</Text>
            <Text style={styles.tncListItems}>3.3 You are responsible for keeping usernames and passwords secure. We are not responsible for any losses you might incur due to a third party misusing your username and / or password. You will be personally liable for all and any transactions concluded on your account.</Text>
            <Text style={styles.tncListItems}>
3.4 You agree to notify us immediately should you become aware or suspect that someone else is accessing or using your username and / or password without your authorisation and you agree to take all reasonable steps to mitigate any loss or harm to you.</Text>
            <Text style={styles.tncListItems}>
3.5 You agree that you will not in any way use any mobile device, software or other instrument to interfere or attempt to interfere with the proper working of the app.</Text>

            <Text style={styles.sectionHeader}>4. ORDERS, PRICING AND PAYMENT</Text>
            <Text style={styles.tncListItems}>4.1 You may place orders for the services during business hours on business days, which we may, in our sole discretion either accept or reject, without having to provide you any reason, subject to availability and receipt of payment, requests will be processed within 1 day and delivery confirmed in-app and email receipt notification.</Text>
            <Text style={styles.tncListItems}>4.2 Whether or not we accept an order depends on the availability of drivers, the correctness of the information you provided relating to the services and receipt of payment or payment authorisation by us.</Text>
            <Text style={styles.tncListItems}>
4.3 When you place an order through the app, you shall be required to confirm that the package meets the specifications set out in these terms and conditions and provide the relevant details required to place your order for the services.</Text>
            <Text style={styles.tncListItems}>
4.4 Upon acceptance of your order, you will be able to view an overview of the order, real-time updates regarding the order and be provided with a specific code, which code must be given to the driver upon collection and delivery of the package.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>4.5 We shall be entitled, in our sole discretion, to adjust our charges from time to time. The charges are quoted and charged on a rate per kilometre and all charges will be displayed inclusive of VAT. In the event that any additional kilometres are required by the driver in respect of an order, you will be liable for such additional charges on a rate for additional kilometres.</Text>
            <Text style={styles.tncListItems}>4.6 The driver/s (with our assistance in navigation) shall be entitled, in his/her sole discretion, to route, combine and plan deliveries, as and when needed.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>
4.7 We cannot guarantee the availability of drivers and when a driver is no longer available after you have placed an order, we will notify you timeously and you will be entitled to a refund of the amount you already paid.</Text>
            <Text style={styles.tncListItems}>4.8 Upon the acceptance of an order, we shall be entitled to debit payment from your credit or debit card, the details of which you have provided when registering an account on the app. All payments made by you in terms of these terms and conditions shall be non-refundable, expect as set out in clause 4.7 above, in which case a refund to you will be processed within a reasonable time.</Text>
            <Text style={styles.tncListItems}>4.9 The payment system used is a third party payment processor (“the payment processor”), which links your credit or debit card account to the app. We are not responsible, nor liable for any errors by the payment processor and you hereby indemnify us and hold us harmless for all and any losses and/or damages of whatsoever nature incurred by us in this regard. Payment may be made via Visa or MasterCard to ClicknDeliver through the application.</Text>
            <Text style={styles.tncListItems}>4.10 Card transactions will be acquired for ClicknDeliver via PayGate (Oty) Ltd who are the approved payment gateway for all South African Acquiring Banks. DPO PayGate uses the strictest form of encryption, namely Secure Socket Layer 3 (SSL3) and no Card details are stored on the website, or the mobile application. Users may go to www.paygate.co.za to view their security certificate and security policy.</Text>
            <Text style={styles.tncListItems}>4.11 Customer details will be stored by ClicknDeliver separately from card details which are entered by the client on DPO PayGate’s secure site. For more detail on DPO PayGate refer to www.paygate.co.za</Text>
            <Text style={styles.tncListItems}>4.12 The merchant outlet country at the time of presenting payment options to the cardholder is South Africa. Transaction currency is South African (ZAR).</Text>
            <Text style={styles.tncListItems}>4.13 Brima Tech takes responsibility for all aspects relating to the transaction including sale of services sold on this mobile application, customer service and support, dispute resolution and delivery of goods.</Text>
            <Text style={styles.tncListItems}>4.14 The provision of services by ClicknDeliver is subject to availability. In cases of unavailability, and a processed transaction ClicknDeliver will refund the client in full within 20 days. Cancellation of orders by the client will attract a 50% administration fee.</Text>
            <Text style={styles.tncListItems}>4.15 The mobile application is governed by the laws of South Africa and Brima Tech chooses as its domicilium citandi et executandi for all purposes under this agreement, whether in respect of court process, notice, or other documents or communication of whatsoever nature.</Text>


            <Text style={styles.sectionHeader}>5. INSURANCE FOR PACKAGES</Text>

            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>5.1 We are not registered as an insurance provider nor do we provide advice or intermediary services with regards to financial products as defined by the Financial Advisory and Intermediary Services Act 37 of 2002. Accordingly, we cannot provide an insurance product or service and <Text style={{color:'red'}}>IT IS YOUR SOLE AND ABSOLUTE RESPONSIBILITY TO ENSURE THAT YOU HAVE ADEQUATE COVER OF A PACKAGE AND/OR ITS CONTENTS.</Text></Text>
            <Text style={styles.tncListItems}>
5.2 It shall remain your sole responsibility to ensure that the package and/or its contents are fully insured by you or on your behalf at all times and to the extent required by you.</Text>
            <Text style={[styles.tncListItems, {textDecorationLine:'underline', color:'red', fontWeight:'bold'}]}>5.3 You hereby acknowledge and agree that if the contents of a package is of value to you, you have insured the same adequately.</Text>

            <Text style={styles.sectionHeader}>6. PACKAGING RESTRICTIONS, CANCELLATION OF AN ORDER AND DELIVERY</Text>
            <Text style={styles.tncListItems}>6.1 You are responsible for the packaging of your package and you must ensure that it is suitable for transportation as you take sole risk and responsibility of the package. We and/or the driver/s shall not be liable for any loss, damage or deterioration of any package.</Text>
            <Text style={styles.tncListItems}>
6.2 The package may not exceed a maximum weight of 30kg (thirty kilograms) and the dimensions may not exceed 70cm (seventy centimetres) x 45cm (forty-five centimetres) x 45cm (forty-five centimetres).</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>6.3 Should the driver be of the reasonable belief that the package exceeds the maximum requirements as set out in in clause 6.2, the driver shall be entitled to refuse receipt thereof and you shall remain liable for payment of the total charges of your order.</Text>
            <Text style={styles.tncListItems}>6.4 We nor the drivers have any knowledge as to the particulars and nature of the contents of a package and therefore the following restricted items may not be delivered by the driver/s and you hereby agree that a package will not contain any of the restricted items:</Text>
            <Text style={styles.tncListItems}>6.4.1 any items prohibited by any applicable law;</Text>
            <Text style={styles.tncListItems}>6.4.2 any dangerous items, that are commonly regarded as dangerous or hazardous goods in the freight industry, which are corrosive, explosive, combustive, unstable or otherwise capable of causing harm or damage and which require special handling or precautions to prevent harm or damage to persons or property;</Text>
            <Text style={styles.tncListItems}>6.4.3 stolen items and/or items that you do not have any right or authority to deliver; and</Text>
            <Text style={styles.tncListItems}>6.4.4 any items which require approval/s and/or license/s, of any nature whatever, in order to be transported.</Text>
            <Text style={styles.tncListItems}>6.5 If so required, any governmental authority, including the SAPS and/or private security may open and inspect the package at any time, without any notification to you.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>
6.5 Should the driver be of the reasonable belief and/or suspicion that the package contains any of the restricted items, he/she shall be entitled to demand from you divulge the contents of such package. Should you fail and/or refuse, for any reason whatever, to do so, the driver shall be entitled, in his reasonable discretion, to refuse to accept the package for delivery and you shall remain liable for payment of the total charges of the order.</Text>
            <Text style={styles.tncListItems}>6.6 You are solely responsible to ensure that the individual at the collection address and at the delivery address and/or his authorised representative is present at such address to hand over and/or take receipt of the package to and from the driver/s. <Text style={{fontWeight:'bold'}}>Should you or such authorised individual not be present at the collection and/or delivery address, the driver shall attempt to contact you and remain at such address for at least 5 (five) minutes. Should collection and/or delivery of the package not be able after the said time, the driver shall be entitled to cancel the order and you will be informed of such cancellation via SMS. In the event that the recipient of the package or his/her authorised representative, is not available at the delivery address and/or unable for whatever reason to take receipt of the package and after the driver having attempted to make contact with you and have waited for at least 5 (five) minutes, the driver will return the package to our address and we will let you know and request that you make arrangements to have the package collected from us, failing which you hereby authorise us to dispose of, donate, or resell the contents of a package not collected within 2 (two) months of such request being made. We shall not be responsible or liable in any manner whatever for any loss or damage suffered or caused to the package, including without limitation theft and/or destruction of the package in such circumstances. In respect of this clause 6.6, you shall remain liable for payment of the total charges of the order and any additional charges incurred by us.</Text></Text>
            <Text style={styles.tncListItems}>6.7 Delivery of a package shall be deemed to take place upon the recipient signing electronically for the delivery thereof.</Text>
            <Text style={styles.tncListItems}>6.8 Our and / or the driver’s obligation to deliver a package under an order, will be duly fulfilled when a package is delivered at the delivery address. We nor the driver are responsible for any loss or unauthorised use of a package, after delivery to the delivery address.</Text>
            <Text style={styles.tncListItems}>6.9 <Text style={{fontWeight:'bold'}}>We and / or the drivers shall use our / their best endeavours to render the services within a reasonable time. However, you nor any third party shall have any claim against us and / or the driver in question, whatsoever for compensation or for damages suffered as a result of late delivery thereof.</Text></Text>
            <Text style={styles.tncListItems}>6.10 We do not accept any responsibility for any errors or omissions on the app and / or a force majeure event resulting in the late or non-delivery of a package by a driver and / or the late delivery of a package as a result of traffic and / or load shedding.</Text>
            <Text style={styles.sectionHeader}>
7. PRIVACY POLICY AND THE PROTECTION OF PERSONAL INFORMATION ACT, 3 OF 2013 (“POPIA”)</Text>
            <Text style={styles.tncListItems}>
7.1 YOU ARE REQUESTED TO ACCESS OUR PRIVACY POLICY AND INFORMED CONSENT NOTICE which is available on our website and/or the app.</Text>
            <Text style={styles.tncListItems}>7.2 The said Privacy Policy is applicable to a) all and any of our electronic platforms which might be owned, used or hosted by us and / or accessed by us; b) and all and any data subjects who access and make use of our electronic platforms; and c) all and any of our personal information.</Text>
            <Text style={styles.tncListItems}>7.3 BY ACCESSING OR USING OUR ELECTRONIC PLATFORMS OR BY PROVIDING US WITH YOUR PERSONAL INFORMATION, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THE PRIVACY POLICY, YOU AGREE TO BE BOUND TO THIS PRIVACY POLICY AND YOU CONSENT TO US PROCESSING YOUR PERSONAL INFORMATION, WHICH WE UNDERTAKE TO PROCESS STRICTLY IN ACCORDANCE WITH THE PRIVACY POLICY AND POPIA.</Text>
            <Text style={styles.tncListItems}>
7.4 You hereby agree and acknowledge that in order for us and the driver/s to render the services to you, we shall require access to and use your personal information and we shall further be required to furnish the driver/s with your personal information in order to render the services to you. You hereby consent to us accessing and using your personal information and furnishing the same to the driver/s in order to render the services to you.</Text>
            <Text style={styles.sectionHeader}>8. LINKS TO OTHER WEBSITES</Text>
            <Text style={styles.tncListItems}>From time to time this website and the app may also include links to other websites. These links are provided for your ease to provide further information. They do not signify that we endorse the website(s) and we have no responsibility for the content of the linked website(s).</Text>
            <Text style={styles.sectionHeader}>9. DISCLAIMER</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>
9.1 The use of the website and/or the app and/or the services, are exclusively at your sole risk and you take full responsibility for all and any risk or loss resulting from the use thereof or dependence on any information on the website and/or app and/or the services.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>
9.2 Whilst we take reasonable measures to ensure that the content of the website and/or app is accurate and complete, we make no representations or warranties, whether express or implied, as to the timeliness, availability or functionality of the website and/or the app and/or as to the accuracy, completeness or reliability of any information on the website and/or the app. If any such representations or warranties are made any of our representatives, we shall not be bound thereby. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>9.3 In addition to the disclaimers contained elsewhere in these Terms and Conditions, we also make no warranty or representation, whether express or implied, that the information available on the website and/or the app are free of viruses, spyware, malware, trojans, or any other data or code which is able to corrupt, destroy, compromise, disrupt, disable, harm, jeopardise or otherwise obstruct or delay, in any manner the operation, constancy, security functionality or content of your computer system, computer network, hardware or software in any way. You accept all risk associated therewith, save where such risks arise due to our gross negligence or wilful misconduct. We thus disclaim all liability for any damage, loss or liability of any nature whatsoever arising out of or in in connection with your access to or use of the website and/or the app.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>9.4 We undertake to use reasonable actions to maintain the operation of the website and/or the app and/or the services, however we cannot guarantee continuous, uninterrupted or secure access thereto. We will not be liable for any delay or failure in the operation of the services, or the functioning of the website and/or mobile systems, where such failure is due to factors beyond our control.</Text>
            <Text style={styles.tncListItems}>9.5 We will not be held liable for any indirect, special or consequential losses of any kind whatsoever arising from, or in connection with the services (whether in contract, statute or delict).</Text>
            <Text style={styles.tncListItems}>9.6 Notwithstanding the above, our financial liability for all and any damages and/or losses that you may incur as a result of our breach of any of the terms and conditions and/or in using the services, only once proven, shall be limited to the amount you paid for an order. We shall not be liable for the actions, errors or omissions of a driver and will not be liable for damages that a driver might cause to a package.</Text>
            <Text style={styles.sectionHeader}>10. RESTRICTED ACTIVITIES.</Text>
            <Text style={styles.tncListItems}>10.1 We forbid the following uses, and should it be found, at our sole discretion that you have created your account and/or placed an order for the services for any of the following restricted activities, your account will be immediately closed and / or suspended without notice to you:</Text>
            <Text style={styles.tncListItems}>10.1.1 any illegal purpose, or in violation of any local, provincial, national, or international law;</Text>
            <Text style={styles.tncListItems}>10.1.2 to defame, harass, abuse, threaten or defraud others, or to collect, or to attempt to collect, personal information about users, or third parties, without their consent and against the provisions of POPIA;</Text>
            <Text style={styles.tncListItems}>10.1.3 distributing material which is defamatory, offensive, contains or amounts to hate speech or is otherwise unlawful; and</Text>
            <Text style={styles.tncListItems}>10.1.4 displaying, publishing, copying, printing, posting or otherwise using the website and/or the app and/or the information contained therein without our express prior written consent.</Text>
            <Text style={styles.tncListItems}>10.2 You may not access or use our website and/or the app and/or the services for any purpose other than for utilizing the services offered via such systems in the normal manner. You may not use or access our website and/or the app and/or the services in a manner that would bring us, our business and/or any of our affiliates (including but not limited to the drivers) into disrepute. Furthermore, you may not access or use our website and/or the app and/or the services and/or mobile systems for unlawful purposes or use it in a manner which infringes our rights and/or the rights of any other person.</Text>
            <Text style={styles.sectionHeader}>
11. COMPLAINTS AND ASSISTANCE</Text>
            <Text style={styles.tncListItems}>11.1 We aim to provide you with quality services. If, however, you feel that you have cause to complain or if you require any assistance, you can email us at info@clickndeliver.co or call us on 08600 CLICK.</Text>
            <Text style={styles.tncListItems}>11.2 We will make every effort to ensure that only drivers, who have integrity and are respectful of their profession, use the app. However, we are in no position to guarantee that every driver satisfies you with the relevant standards at all items. If you experience unfavourable services from a driver, please notify us immediately.</Text>
            <Text style={styles.sectionHeader}>12. AVAILABILITY AND TERMINATION</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>12.1 We may in our sole discretion terminate, suspend and modify this website and/or the app and/or the services, with or without notice to you. We will not be liable to you in the event that we choose to suspend the website and/or the app and/or services to you should you fail to comply with your obligations under these terms and conditions, without any prejudice to any claims for damages or otherwise we may have against you.</Text>
            <Text style={[styles.tncListItems, {fontWeight:'bold'}]}>
12.2 We are entitled to refuse to accept or process payment on any order and / or cancel any order and / or suspend or terminate your access to the website and / or the app and / or the services, should we suspect fraud and/or the unlawful use of the website and / or app and / or services.</Text>
            <Text style={styles.sectionHeader}>13. GOVERNING LAW AND JURISDICTION</Text>
            <Text style={styles.tncListItems}>
These terms and conditions and our relationship and/or any dispute arising from or in connection with these terms and conditions shall be governed and interpreted in accordance with the laws of the Republic of South Africa. Your use of the website and/or the app will constitute your consent and submission to the jurisdiction of the South African courts regarding all proceedings, transactions, applications or the like instituted by either party against the other, arising from any of these terms and conditions.</Text>
            <Text style={styles.sectionHeader}>14. GENERAL</Text>
            <Text style={styles.tncListItems}>
14.1 These terms and conditions constitute the entire agreement between you and us in respect of the use of the website and/or the app and/or the services offered.</Text>
            <Text style={styles.tncListItems}>14.2 These terms and conditions of use shall supersede any contrary terms or conditions incorporated by you in your communications with us and any such conflicting terms or conditions will not form part of the agreement concluded between us.</Text>
            <Text style={styles.tncListItems}>
14.3 Our failure to enforce any provision of this agreement strictly will not be construed as a waiver of any provision or right. In the event that a portion of this agreement is held unenforceable or invalid by any competent authority, the unenforceable portion will be construed in accordance with applicable law as nearly as possible to reflect the original intentions of the parties, and the remainder of the provisions will remain in force and effect to the fullest extent permitted by the law.</Text>
            <Text style={styles.tncListItems}>14.4 We may cede, delegate, transfer and assign our rights, obligations and duties hereunder to any other person, without your prior written consent and without written notice to you. You however, may not subcontract, cede, delegate, transfer or assign any of your rights, obligations or duties hereunder to any other person without our prior written consent.</Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>

        </ScrollView>
    )
}

export default CardTnC
