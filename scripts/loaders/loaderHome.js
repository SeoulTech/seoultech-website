var React = require('react'),
Wrapper = require('../components/wrapper'),
HomeComponent = require('../components/homeComponent')
React.renderComponent(Wrapper({content: function(props) {
return HomeComponent(props || {"config":{"events":{"title":"Upcoming meetups","query":"all upcoming","default":{"title":"Latest meetup","query":"1 past"}},"blog":{"title":"Latest news","query":"5 newest"},"custom":"#custom header\ncustom text | text text; text text text: text\n"},"events":{"results":[{"id":"193865442","time":1406282400000,"status":"past","yes_rsvp_count":77,"description":"<p>If you've ever visited <a href=\"http://news.ycombinator.com/\">Hacker News</a>, you've almost certainly seen the “Show HN” or “Ask HN” posts. Well, it's time to get off the Internet and tell us about it face to face. We'll provide you with our honest feedback, you provide us with a great hack, or idea.</p> <p><br/>We'll give you 10 minutes to show off your tool, hack, library, an art project.  Great feedback from highly engaged audience is guaranteed! </p> <p><img src=\"http://photos2.meetupstatic.com/photos/event/d/9/3/2/600_384775602.jpeg\" /></p> <p>List of speakers: </p> <p><br/><b>1. Mathis Büchi</b></p> <p>“How we grew our site to 1.5 million users a month”</p> <p><i>We increased our user base for our web application from a few dozen monthly visitors to 1.5 million within a year. </i></p> <p><b>2. Manuel Stofer</b></p> <p>“Experiences scaling a web app”</p> <p><i>Architectures we tried and problems we encountered while our web app grew from 1 to 30 servers.</i></p> <p><b><i>3. </i>FraSen Inc.: Tien Thinh Nguyen &amp; Jackson Ra</b></p> <p>“Hack Sleep”</p> <p><i>Hardware engineer Tien Thinh Nguyen and product strategist Jackson Ra will talk about the wearable computing market and how optimizing the quality of your sleep can help you truly seize the day.</i></p> <p><b>4. Jongwook Woo</b></p> <p><i>“Big Data and Use Cases on Hadoop” </i></p> <p><b>5. Carsten Haitzler</b></p> <p><i>“Long ago I thought my desktop was ugly. Writing a Window Manager can't be that hard... I decided to have a stab at is. This is its story”</i></p> <p><i>Abstract:<br/>When I was a student, I was introduced to UNIX and its display system - \"The X Window System\". Also knows as X11 or X. What made this usable was a \"Window Manager\". It gave you titlebars, the ability to move windows, resize them, virtual desktops, focus management etc. etc. ... At the time I had tried various Window Managers, and not being happy with Any of them I decided to teach myself C as a language, learn X11 and the raw libraries it was based on, and build myself a Window Manager. Now about 19 years later and over 1 million lines of C code still standing (not to mention all the code written, thrown away and replaced), a career now centered around it, It wasn't so hard, but I had no idea what I was getting into. This is my \"best hack ever\".</i></p> <p><br/><b>6. Hassan Abid, Sujin Lee</b></p> <p><i>“How to build an effective online community in Korea; Challenges and Experiences” </i></p> <p><br/><i><br/></i></p> <p><i><br/></i></p> <p><b>OUR HOST -</b> WAHA ASIA</p> <p>Co-working place and a platform for entrepreneurs and startups to transform ideas into sustainable and profitable business. </p> <p><br/>2F JEI Building, 6, Eulji-ro, Jung-gu,<br/>Seoul, Korea<br/><a href=\"http://www.waha.asia/\">www.waha.asia</a></p> <p><br/><img src=\"http://photos4.meetupstatic.com/photos/event/5/1/6/a/600_385160842.jpeg\" /></p> <p><img src=\"http://photos3.meetupstatic.com/photos/event/5/2/1/e/600_385161022.jpeg\" /></p>","name":"Seoul Hack'n'Tel­l night #3"}],"title":"Latest meetup"},"blog":{"results":[{"id":"2014/2014-05-15-the-rise-of-cryptocurrencies-bitcoin-beyond-dcamp","title":"The Rise of Cryptocurrencies: Bitcoin & Beyond, @DCamp, May 24","date":"2014-05-15","tags":[],"description":"<h1 id=\"the-rise-of-cryptocurrencies-bitcoin-beyond-dcamp-may-24\">The Rise of Cryptocurrencies: Bitcoin &amp; Beyond, @DCamp, May 24</h1>\n<p>Interested in Bitcoin or other cryptocurrencies?Ever wondered how to\ntrade or spend Bitcoin in Korea? Is Bitcoin the currency of the future\nor a flop?                             </p>\n<p>Come join us at our <strong>&quot;The Rise Of Cryptocurrencies: Bitcoin &amp;\nBeyond&quot;</strong> event at <a href=\"http://dcamp.kr/about_en\">D-Camp</a> on Saturday, May\n24!</p>\n<p><a href=\"http://www.seoultechsociety.org/\">Seoul Tech Society</a>, <a href=\"http://www.meetup.com/Seoul-Bitcoin-Meetup-%EC%84%9C%EC%9A%B8-%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8-%EB%AA%A8%EC%9E%84/\">Seoul Bitcoin\nMeetup</a>,\nand lead Korean Bitcoin\nstartups <a href=\"https://www.korbit.co.kr/\">Korbit</a> and <a href=\"https://www.coinplug.com/home.do\">Coinplug</a> will\ncome together to discuss past, present, and future of cryptocurrencies. </p>\n<p>Great people and thought-provoking discussions are guaranteed!</p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/bitcoin-poster.png\" alt=\"\"></p>\n<p> <strong>Agenda</strong></p>\n<p><strong>13:00 Reception </strong></p>\n<p><strong>13:15 Introduction to Bitcoin</strong> </p>\n<p><em>Ruben Somsen, Seoul Bitcoin Meetup</em></p>\n<p><strong>13:40 The non-monetary applications of Bitcoin</strong></p>\n<p><em>Jason Park, Korbit </em> </p>\n<p><strong>14:20 Bitcoin adoption worldwide and Coinplug in Korea</strong></p>\n<p><em>Evelyn Chung, Coinplug</em>   </p>\n<p><strong>14:50 Political and philosophical ideas behind the creation\nof cryptocurrency</strong></p>\n<p><em>Terry Jang</em> </p>\n<p><strong>Hands-on part: </strong></p>\n<p><strong>15:30 Sending Money Abroad to and from Korea</strong></p>\n<p><em>Chris Williams</em> </p>\n<p><strong>15:45 Bitcoin Wallets on iOS </strong></p>\n<p><em>Jong Hun Kim </em></p>\n<p><strong>16:00 Getting paid as a freelancer in Bitcoin</strong></p>\n<p><em>Ben McDonald </em></p>\n<p><strong>16:15 Alternatives to Bitcoin: Alt Coins</strong></p>\n<p>Jeff Paik, bitPremierS</p>\n<p><strong>17:00 ~</strong>  <strong>After party and networking event</strong> (details will be\nannounced later)</p>\n<p>——————————————————————————————————</p>\n<p><strong>Speakers</strong></p>\n<p><strong>Ruben Somsen </strong></p>\n<p>Ruben is a freelance translator that has lived in Korea for three years.\nHe is the organizer of the Seoul Bitcoin Meetup and knows a lot about\nthe technical side of Bitcoin.</p>\n<p><strong>Jason Park, Korbit </strong></p>\n<p>Korbit is South Korea’s first and largest Bitcoin exchange and wallet\ncompany.  </p>\n<p><strong>Evelyn Chung, Coinplug</strong> </p>\n<p>Evelyn is Chief Marketing Officer of Coinplug, a Seoul-based Bitcoin\nstartup. Coinplug provides a Bitcoin exchange and wallet services, and\npayment processor targeting Korean and Asian markets. </p>\n<p><strong>Terry Jang </strong></p>\n<p>Terry is the owner of an e-commerce consulting company.</p>\n<p><strong>Chris Williams</strong> </p>\n<p>Chris is an English teacher who has lived and worked in Seoul for the\npast 2 years. Before that he lived in the UAE for 2 years. He became\ninterested in bitcoin because it allows people to send any amount of\nmoney, anywhere in the world, instantly, and for free. </p>\n<p><strong>Jong Hun Kim</strong> </p>\n<p>Jong Hun is a korean Bitcoin user. He’s not a tech savvy guy, but is\nreally interested in the bitcoin ecosystem and is currently researching\nand developing a Bitcoin fund. </p>\n<p><strong>Ben McDonald</strong> </p>\n<p>Ben is a freelance web developer from New Zealand living in Seoul. Ask\nhim anything about Bitcoin and he will give you an answer (after first\nasking Ruben what the answer is).</p>\n<p><strong>Jeff Paik</strong></p>\n<p>Jeff Paik is a writer for bitPremierS and co-founder of cryptocurrency\nadvisory group Coinvest.</p>\n<p>——————————————————————————————————</p>\n<p>On Twitter?\nFollow <a href=\"https://twitter.com/FutureTenseNow\">@Seoul_Tech</a> and\nuse #CryptoCurrency.</p>\n<p>FB? Follow us <a href=\"https://www.facebook.com/SeoulTechSociety\">https://www.facebook.com/SeoulTechSociety</a></p>\n<p><strong>Participants:  </strong></p>\n<p><a href=\"http://www.meetup.com/Seoul-Bitcoin-Meetup-%EC%84%9C%EC%9A%B8-%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8-%EB%AA%A8%EC%9E%84/\">Seoul Bitcoin\nMeetup</a> </p>\n<p><a href=\"https://www.coinplug.com/home.do\">Coinplug</a> </p>\n<p><a href=\"https://www.korbit.co.kr/\">Korbit</a> </p>\n<p><a href=\"http://www.bitpremiers.com/\">bitPremierS</a></p>\n"},{"id":"2014/2014-06-12-launch-lab-where-ideas-take-off-june-28","title":"Launch Lab, Where Ideas Take Off, June 28","date":"2014-06-12","tags":[],"description":"<h1 id=\"launch-lab-where-ideas-take-off-june-28\">Launch Lab, Where Ideas Take Off, June 28</h1>\n<p>RSVP <a href=\"http://www.meetup.com/seoul-tech-society/events/187283782/\">http://www.meetup.com/seoul-tech-society/events/187283782/</a></p>\n<p><strong>What is LaunchLab? </strong></p>\n<p>As part of the Launch - Hack - Tell cycle of innovation, SeoulTech is\nproud to announce the “Launch Lab” series of meetups.  This is a new\ntype of event where researchers, entrepreneurs and innovators discuss\nand propose (any) project, and solicit ideas and help from other\nSeoulTech members.</p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/launch-lab-poster.png\" alt=\"\"></p>\n<p><strong>Why? </strong></p>\n<p>Launch Lab helps members take one giant leap beyond networking. These\nevents allow members  to get involved with the creation of new ideas or\nstartups, while forging friendships and business partnerships to last a\nlifetime. </p>\n<p><strong>How? </strong></p>\n<p>The event features a group of speakers that give a 10 to 15 minute\npresentation of their idea. The audience then discusses the idea.\nAudience members can also choose to join or further contribute to the\nproject.</p>\n<p>Open discussion sessions will also be available, so if anyone gets\ninspired they can share and discuss their ideas with the group.</p>\n<p><strong>When?</strong></p>\n<p><em>June 28th, 2014</em></p>\n<p>13:00 - 17:00: Presentations + Discussion + Coffee/Beer/Snacks</p>\n<p>17:00 - 19:00: Dinner (possible group discount depending on number)</p>\n<p>19:00 - 21:00: Open Mic Music Session</p>\n<p><strong>Call for projects and proposals (and musicians)!</strong></p>\n<p>If you are a researcher, startup founder, entrepreneur, idea generator,\nor dreamer, sign up to be a speaker!</p>\n<p>If you want to play in the Open Mic night, please let us know. Guitar\nwill be provided.</p>\n<p><strong>Please email:</strong> Joshua [at] cybercrimetech.com</p>\n<p><strong>Where?</strong></p>\n<p><strong>Coffee Zaroo *</strong>Seoul Metro Bundang Line (Yellow), Jukjeon Station*</p>\n<p><em>Address in Korean:</em> 경기도 용인시 기흥구 보정1203-12 </p>\n<p><em>Address in English:</em> 1203-12 Bojeong-dong (11-16 Jukjeon-ro 43Beon-gil)\nGiheung-gu, Yongin-si, Gyeonggi-do</p>\n<p>Map: <a href=\"http://goo.gl/maps/vLy2S\">http://goo.gl/maps/vLy2S</a></p>\n<p><strong>Note: This event is currently hosted outside of Seoul (Jukjeon -\naccessible by bus or Seoul Metro, 25 mins from Gangnam) - think as a\nhalf day picnic-style relaxing event. If we cannot get 20+ to RSVP, the\nmain event will be moved to Seoul. Please check the map before\nRSVPing.</strong></p>\n<p>On Twitter? Follow <a href=\"https://twitter.com/FutureTenseNow\">@Seoul_Tech</a></p>\n<p>FB? Follow us <a href=\"https://www.facebook.com/SeoulTechSociety\">https://www.facebook.com/SeoulTechSociety</a></p>\n"},{"id":"2014/2014-06-26-promotion-wellness-it-festival-at-center-seoul-july","title":"Promotion: Wellness IT Festival @aT Center Seoul, July 10","date":"2014-06-26","tags":[],"description":"<h1 id=\"promotion-wellness-it-festival-at-center-seoul-july-10\">Promotion: Wellness IT Festival @aT Center Seoul, July 10</h1>\n<p>Register here to <strong>view &amp; network</strong>: <a href=\"http://goo.gl/u9dHBl\">http://goo.gl/u9dHBl</a></p>\n<p>Register here to <strong>exhibit</strong>: <a href=\"http://www.wita-festival.com/register\">http://www.wita-festival.com/register</a>\n(<em>startups in Education, Culture, Social, Finance and Health areas</em>)</p>\n<p>Dear friends, we are glad to invite you to the Wellness IT Festival\norganized by our partner WiTA. </p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/wita-poster.png\" alt=\"\"></p>\n<p><strong>About</strong>: The Wellness IT Festival brings together experts,\nentrepreneurs, and attendees to a startup festival &amp; networking event\nand showcases the latest in wellness technology developed in South Korea\nand around the world.\\\n<a href=\"http://www.wita-festival.com/\">http://www.wita-festival.com/</a></p>\n<p><strong>When</strong>: </p>\n<p>Festival (July 10):\\\nFREE admission for SeoulTech members and students.</p>\n<p>1st International Conference on Wellness IT &amp; Festival (July 9 - 10):\\\nIf you are interested in attending the full event, the ticket cost is\nW200,000 (50% discount will be provided to SeoulTech members).</p>\n<p><strong>Location</strong>: aT Center Seoul <a href=\"http://atcenter.at.or.kr/\">http://atcenter.at.or.kr/</a></p>\n"},{"id":"2014/launch-lab-followup","title":"Launch Lab followup","date":"2014-07-11","tags":[],"description":"<h1 id=\"launch-lab-followup\">Launch Lab followup</h1>\n<p>There was a relaxing, fun and engaging exchange of ideas at Coffee Zaroo\nin Bojeong during the 1st Seoul Tech Society ‘Launch Lab’.</p>\n<p>Brief presentations were followed by inspirational discussions that\nvaried between highly technical to philosophical implications about the\nideas presented.</p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/launchlab-followup-1.jpg\" alt=\"image\"></p>\n<p>Mobile malware analysis plugin</p>\n<p>Nikolay briefly explained about mobile malware threats. He invited\ndevelopers and researchers to expand on his open source mobile forensic\ninvestigation plugin with dynamic analysis and collaboration\ncapabilities. Join him if you are interested in malware research,\nprogramming and/or plugin and tools development.</p>\n<p>Ultrasound diagnostics with mobiles</p>\n<p>Next, Phillip discussed in-home options for ultrasound processing, and\nhow processing  on the cloud could affect medical diagnostics in the\nfuture. This area has a number of challenges including mobile device\ndevelopment, hardware development, cloud development and image\nclassification, among others. Join him if you are interested in\nhealth-related tech.</p>\n<p>Bitcoin and social music networks</p>\n<p>Jackson enlightened the audience with entertaining talk about\ndiscovering potential new applications of bitcoin and social music\nnetworks to promote (and compensate) original as well as cover artists.\nContact him if you are interested in bitcoin, social networks and/or\nmusic!</p>\n<p>Bitple: Hollywood meets Bitcoin</p>\n<p>Next a group from Bitple continued the topic of bitcoin with their idea\nto apply it for a cinema-related bitcoin betting platform. Contact them\nif you are interested in bitcoin, web development and/or movie tracking\nsystems.</p>\n<p><em>\\</em>Note: Online gambling is illegal in Korea. SeoulTech does not support\nor condone illegal activities. We see this as a learning project, and\nassume any implementation would be in accordance with laws of the\ncountry it is implemented.*</p>\n<p>ESL Language assistance app</p>\n<p>Campbell discussed his ESL Language assistance app that lets students\nand teachers focus on their own language learning journey and style. The\napp attempts to better customize learning process of the user. Contact\nhim if you are interested in app development or alternative teaching\nstrategies.</p>\n<p>Social language learning app</p>\n<p>Jan showed a beta version of his social language learning app that\nallows users to use peer-based language learning in their normal social\nnetworking activities. Participate with Jan if you want to learn a\nlanguage, be a beta tester or design/develop the new version of the app.</p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/launchlab-followup-2.jpg\" alt=\"image\"></p>\n<p><strong>Idea Open Mic</strong></p>\n<p>Next, we had two presenters in the “Idea Open Mic” session.</p>\n<p>The first was a group of volunteers that offer free weekend Korean\nlanguage courses in Migeum. If you are in the area, please contact\n<a href=\"&#x6d;&#x61;&#x69;&#x6c;&#116;&#x6f;&#58;&#105;&#x73;&#115;&#117;&#101;&#48;&#x39;&#x31;&#x31;&#x40;&#x67;&#x6d;&#x61;&#105;&#x6c;&#46;&#x63;&#111;&#x6d;\">&#105;&#x73;&#115;&#117;&#101;&#48;&#x39;&#x31;&#x31;&#x40;&#x67;&#x6d;&#x61;&#105;&#x6c;&#46;&#x63;&#111;&#x6d;</a> for more information.</p>\n<p>Travelers service app for Jakarta</p>\n<p>Novi asked about feedback from everyone about a possible service in\nJakarta to help travelers discovering local attractions. Do you know a\nsocial service app that is popular in Asia and should be adopted in\nIndonesia? Please contact her if you have ideas about the best way to\nshare information about local attractions, and walking tours.</p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/launchlab-followup-3.jpg\" alt=\"image\"></p>\n<p><strong>Open Mic Music Night</strong></p>\n<p>But that’s not all! After the dinner all those who decided to relax\noutside of Seoul stayed for the open mic music night, and enjoyed near\nprofessional performances of Korean and American songs as well as a fun\none form Russia.</p>\n<p>We are looking forward to hearing your feedback about your ‘Launch Lab’\nexperience. Do you think it was useful? Interesting? Want more\nrefreshments? Let us know!</p>\n<p>Reach us at <em>contacts@seoultechsociety.org</em> with feedback or for help to\nconnect with presenters. </p>\n"},{"id":"2014/seoul-hackntel-l-night-3-waha-july-25","title":"Seoul Hack'n'Tel­l night #3 @WAHA, July 25","date":"2014-07-11","tags":[],"description":"<h1 id=\"seoul-hack-n-tel-l-night-3-waha-july-25\">Seoul Hack&#39;n&#39;Tel­l night #3 @WAHA, July 25</h1>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/hack-tell-3.jpeg\" alt=\"\"></p>\n<p>If you’ve ever visited <a href=\"http://news.ycombinator.com/\">Hacker News</a>,\nyou’ve almost certainly seen the “Show HN” or “Ask HN” posts. Well, it’s\ntime to get off the Internet and tell us about it face to face. We’ll\nprovide you with our honest feedback, you provide us with a great hack,\nor idea. </p>\n<p>We’ll give you 10 minutes to show off your tool, hack, library, an art\nproject.  Great feedback from highly engaged audience is guaranteed! </p>\n<p>RSVP:<a href=\"http://www.meetup.com/seoul-tech-society/events/193865442/\">http://www.meetup.com/seoul-tech-society/events/193865442/</a></p>\n<p>List of speakers:  </p>\n<p>1. Mathis Büchi</p>\n<p>“How we grew our site to 1.5 million users a month”</p>\n<p><em>We increased our user base for our web application from a few dozen\nmonthly visitors to 1.5 million within a year. </em></p>\n<p>2. Manuel Stofer</p>\n<p>“Experiences scaling a web app”</p>\n<p><em>Architectures we tried and problems we encountered while our web app\ngrew from 1 to 30 servers.</em></p>\n<p><em>3. </em>FraSen Inc.: Tien Thinh Nguyen &amp; Jackson Ra</p>\n<p>“Hack Sleep”</p>\n<p><em>Hardware engineering expert Tien Thinh Nguyen and product strategist\nJackson Ra will describe how FraSen is re-inventing the way we sleep. In\nthis emerging era of wearable computing, many companies have been\nthinking about ways to track and optimize fitness, for instance, with\nFitbits and similar wrist worn devices. The FraSen team is venturing\ninto the ultimate undiscovered area of personal health &amp; well-being,\nnamely, the 1/3 of our lives we spend asleep. Find out how optimizing\nthe quality of your sleep can help you truly seize the day.</em></p>\n<p>more speakers to be confirmed. </p>\n<p>OUR HOST - WAHA ASIA</p>\n<p>Co-working place and a platform for entrepreneurs and startups to\ntransform ideas into sustainable and profitable business.  </p>\n<p>2F JEI Building, 6, Eulji-ro, Jung-gu, \\\nSeoul, Korea \\\n<a href=\"http://www.waha.asia/\">www.waha.asia</a> </p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/hack-tell-3-waha-1.jpeg\" alt=\"\"></p>\n<p><img src=\"http://seoultech.github.io/seoultech-website/source/images/blog/2014/hack-tell-3-waha-2.jpeg\" alt=\"\"></p>\n"}],"title":"Latest news"},"custom":{"html":"<h1 id=\"custom-header\">custom header</h1>\n<p>custom text | text text; text text text: text</p>\n"}})}}), document.body)