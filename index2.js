function celebrify (str) {
  let jaydenArr = ['I watch Twilight Every Night', 'Dying Is MainStream #MONEY', 'Once You Go In You Always Come Out Alive', 'I Will Always Give You The Truth I Will Never Lie To You In My music If You Cant Handle My Feelings And Emotions Please Unfollow Me', 'Ill Never Forget The Blogs That Believed In Me Since The Begging.', 'People Tell Me To Smile I Tell Them The Lack Of Emotion In My Face Doesn\'t Mean I\'m Unhappy', 'Most Trees Are Blue', 'You Must Not Know Fashion', 'How Can Mirrors Be Real If Our Eyes Aren\'t Real', 'I Hope It Doesn\'t Take For Me To Die For You To See What I Do For You', 'If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It', 'People Use To Ask Me What Do You Wanna Be When You Get Older And I Would Say What A Stupid Question The Real Question Is What Am I Right Now', 'All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own', 'If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth', 'If Everybody In The World Dropped Out Of School We Would Have A Much More Intelligent Society', 'Trees Are Never Sad Look At Them Every Once In Awhile They\'re Quite Beautiful', 'We Need To Stop Teaching The Youth About The Past And Encourage Them To Change The Future'];
  let khaledArr = ['They don’t want you to win', 'Watch your back, but more importantly when you get out the shower, dry your back. It’s a cold world out there.', 'Be a star. Be a Superstar.', 'All I do is WIN, WIN, WIN no matter what', 'Almond milk + cinnamon crunch = major key to success.', 'When you stop making excuses and you work hard and go hard you will be very successful.', 'The other day the grass was brown, now its green cuz I ain’t give up. Never surrender.', 'They’ll try to close the door on you… Just open it.', 'To succeed, you must believe. When you believe, you will succeed.', 'In life everyone has a choice. The key is: make a right choice.', 'Bless up. Don’t play yourself.', 'The key is to be honest. Be honest, but don’t play yourself.', 'We have to get money. We have no choice. It cost money to eat.', 'The key to more success is coco butter.'];
  // let britneyArr = ['I get to go to lots of overseas places, like Canada.', 'I’ve never really wanted to go to Japan. Simply because I don’t like eating fish. And I know that’s very popular out there in Africa.', '']
  let bushArr = ['It\'s time for the human race to enter the solar system.', 'The vast majority of our imports come from outside the country.', 'It isn\'t pollution that\'s harming the environment. It\'s the impurities in our air and water that are doing it.', 'I know how hard it is for you to put food on your family.', 'If we don\'t succeed, we run the risk of failure.', 'Our enemies are innovative and resourceful, and so are we. They never stop thinking about new ways to harm our country and our people, and neither do we.', 'I believe God wants me to be president.', 'There\'s an old saying in Tennessee — I know it\'s in Texas, probably in Tennessee — that says, fool me once, shame on — shame on you. Fool me — you can\'t get fooled again.', 'Islam, as practiced by the vast majority of people, is a peaceful religion.'];
  if (typeof str !== 'string') throw new Error('Input must be string, you fool.');
  // if (str !== 'Jayden' || str !== 'random' || str !== 'DJ Khaled' || str !== 'Bush') throw new Error('Listed category, input must be.');
  let allArr = [jaydenArr, khaledArr, bushArr];
  let resultStr = '';

  switch (str) {
    case 'jayden':
    case 'jayden smith':
    case 'jayden Smith':
    case 'Jayden Smith':
    case 'Jayden smith':
    case 'Jayden': {
      let randomNum = Math.floor(Math.random() * jaydenArr.length);
      resultStr = jaydenArr[randomNum];
    } break;
    case 'Random':
    case 'random': {
      let randomAllArrNum = Math.floor(Math.random() * allArr.length);
      let randomRanArr = allArr[randomAllArrNum];
      let randomRanArrLength = allArr[randomAllArrNum].length;
      // console.log('randomRanArr: ', randomRanArr);
      let randomRanArrNum = Math.floor(Math.random() * randomRanArrLength);
      let randomQuote = randomRanArr[randomRanArrNum];
      console.log('randomQuote: ', randomQuote);
      resultStr = randomQuote;
    } break;
    case 'dj Khaled':
    case 'dj khaled':
    case 'Dj Khaled':
    case 'Khaled':
    case 'DJ Khaled': {
      let randomNum = Math.floor(Math.random() * khaledArr.length);
      resultStr = khaledArr[randomNum];
    } break;
    case 'George Bush':
    case 'George W. Bush':
    case 'george w. bush':
    case 'george bush':
    case 'bush':
    case 'Bush': {
      let randomNum = Math.floor(Math.random() * khaledArr.length);
      resultStr = khaledArr[randomNum];
    } break;
    // case 'Britney Spears':
    // case 'Britney spears':
    // case 'britney spears':
    // case 'britney Spears':
    // case 'britney':
    // case 'Britney': {
    //   let randomNum = Math.floor(Math.random() * khaledArr.length);
    //   resultStr = britneyArr[randomNum];
    // } break;
  }
  return resultStr;
}

console.log(celebrify('random'));

module.exports = celebrify;
