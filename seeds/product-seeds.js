const { Product } = require("../models");

const productData = [
  //5 minutes
  {
    product_name: "Box Breathing Excercise",
    product_content:
      "Breathe out / breathe in 4 count / hold 4 / exhale count 4",
    product_link:
      "https://www.bing.com/videos/search?q=box+breathing+technique&&view=detail&mid=239E803326A1B5468D96239E803326A1B5468D96&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dbox%2Bbreathing%2Btechnique%26FORM%3DHDRSC3",
    category_id: 1,
  },

  {
    product_name: "Give yourself a hug",
    product_content:
      "Fold arms around body / rest hands on shoulders or arms/ imagine the hug/ squeeze accordingly",
    product_link:
      "https://www.psychologytoday.com/us/blog/close-communication/202205/4-significant-physical-benefits-hugging",
    category_id: 2,
  },

  {
    product_name: "Thank a co-worker, classmate ,teacher",
    product_content:
      "“Thank you so much for your help or kindness” “We’ve accomplished a lot and I appreciate all that you do”",
    product_link:
      "https://www.forbes.com/sites/amymorin/2014/11/23/7-scientifically-proven-benefits-of-gratitude-that-will-motivate-you-to-give-thanks-year-round/?sh=501872e3183c",
    category_id: 3,
  },
  {
    product_name: "Play with a Pet",
    product_content: "Share encouragement, Play with a toy, Pet gently",
    product_link: "https://www.petfinder.com/",
    category_id: 4,
  },

  {
    product_name: "Free Write",
    product_content:
      "Forget grammar rules. Use the timer to keep writing tool moving with any current or creative  thoughts",
    product_link:
      "https://writingprocess.mit.edu/process/step-1-generate-ideas/instructions/freewriting",
    category_id: 5,
  },
  {
    product_name: "Light a candle or put on twinkle lights",
    product_content:
      "The smell of scented candles stimulates our limbic system, the part of the brain that is home to our memory and emotions. Hormones like serotonin and dopamine can be produced to help regulate mood.",
    product_link:
      "https://homesick.com/blogs/news/14-calming-scents-to-help-you-unwind",
    category_id: 6,
  },
  //10 minutes
  {
    product_name: "Write yourself a kind note and place on monitor / mirror ",
    product_content: "Keep positive “I will …” or “I am…” ",
    product_link:
      "https://www.psychologytoday.com/us/blog/smart-relationships/201403/affirmations-the-why-what-how-and-what-if",
    category_id: 1,
  },
  {
    product_name: "Desk Stretch",
    product_content:
      "Hold each stretch gently for 30 seconds. Arms, chest, chin, lower back, legs",
    product_link:
      "https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/stretching/sls-20076525",
    category_id: 2,
  },
  {
    product_name: "Schedule a haircut  nails etc.",
    product_content: "Many hairdressers and barber shops are closed on Mondays",
    product_link: "https://www.beautybar-inc.com/news/6-benefits-pedicure",
    category_id: 3,
  },
  {
    product_name: "Listen to a TED talk",
    product_content:
      "“TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact.”",
    product_link: "https://www.ted.com/talks?sort=newest&duration=6-12",
    category_id: 4,
  },
  {
    product_name: "Drawing/Coloring",
    product_content:
      "“Make a few spaces on your page and spend time in each space creating different patterns, textures, or grouping of words”",
    product_link:
      "https://www.barnesandnoble.com/w/the-mindfulness-coloring-book-emma-farrarons/1141127905",
    category_id: 5,
  },
  {
    product_name: "Put head down on table or desk",
    product_content:
      "“A short nap in the mid-afternoon can boost memory, improve job performance, left your mood, make you more alert, and ease stress” - webMD ",
    product_link: "https://www.youtube.com/watch?v=7cd5nBMsfZo",
    category_id: 6,
  },
  {
    product_name: "Sit outside or near a window ",
    product_content:
      "Find a comfortable seat or stance,enjoy a coffee tea or water, set an intention to be present. A 2018 study at Cornell University found that natural light from a window reduced eye strain, headaches and drowsiness",
    product_link: "",
    category_id: 1,
  },
  {
    product_name: "Tidy a space in office/ home",
    product_content:
      "Pick an area to tidy up. Put on a playlist, remove clutter. Don’t worry about re organizing, just a tidy up. Set a timer for 10 minutes.",
    product_link: "https://www.youtube.com/watch?v=5YiiJjl1Nf0",
    category_id: 2,
  },
  {
    product_name: "Send a positive email to a business you appreciate",
    product_content:
      "“I truly enjoyed working with you, thank you” “I deeply appreciate you taking the time to help me”",
    product_link:
      "https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier#:~:text=In%20positive%20psychology%20research%2C%20gratitude,adversity%2C%20and%20build%20strong%20relationships.",
    category_id: 3,
  },
  {
    product_name:
      "Unsubscribe from email mailers or delete files/ emails no longer needed",
    product_content:
      "“By decluttering, you can boost your mood, sharpen your focus andrelieve anxiety.”",
    product_link:
      "https://www.apartmenttherapy.com/mental-health-benefits-decluttering-36948599",
    category_id: 4,
  },
  {
    product_name: "Pack/make a homemade lunch or grocery list",
    product_content: "Soup, sandwich, salad, wraps, rice bowl, noodles…",
    product_link:
      "https://www.eatingwell.com/gallery/7965827/10-minute-easy-lunch-ideas/",
    category_id: 5,
  },
  {
    product_name:
      "Lay on the floor with legally on floor with legs up against a door or wall",
    product_content:
      "https://health.clevelandclinic.org/benefits-of-legs-up-the-wall/",
    product_link:
      "“Place a blanket or towel on the floor, lie down with trunk near the wall, place legs up against the wall, feel the stretch, breathe easy, come out of the pose slowly”",
    category_id: 6,
  },
  //15 minutes
  {
    product_name: "Meditate",
    product_content:
      "Find a comfortable space you can sit upright, focus on your breath, try to clear your mind or pay attention to a center point aware of the sounds and feelings around you",
    product_link:
      "https://www.calm.com/?pid=googleadwords_int&af_channel=googlesem&af_c_id=14668023573&af_adset_id=136070396085&af_ad_id=603377958424&af_siteid=g&af_sub_siteid=&af_keyword=kwd-609879535395&af_sub3=c&af_sub4=Cj0KCQiAq5meBhCyARIsAJrtdr7V06wR1e8Fcv6eci1MZNt3w--E2yzDIQ8VWPMT_i6FoAffKNdfj0EaAkHGEALw_wcB&utm_medium=paid&utm_source=googlesem&utm_campaign=14668023573&utm_content=homepage&utm_term=kwd-609879535395&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr7V06wR1e8Fcv6eci1MZNt3w--E2yzDIQ8VWPMT_i6FoAffKNdfj0EaAkHGEALw_wcB",
    category_id: 1,
  },
  {
    product_name: "Go for a walk or run",
    product_content:
      "A 15 minute walk can help you think more clearly, increase your metabolism, improves energy, and improves immunity",
    product_link:
      "https://www.dailyom.com/journal/how-to-practice-walking-meditation/?aff=91&ad=1&utm_source=google&utm_medium=ppc&utm_campaign=PerformanceMax&acct=9358138875&campaign_id=16896613381&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr4JEFcVC95xD1Gp-QfUlRD1kuLmOaaPa6uJvVEw9DvN_mXO9fnPBoIaAluTEALw_wcB",
    category_id: 2,
  },
  {
    product_name: "Write a postcard",
    product_content:
      "Start with a cheerful greeting, get right to the point, share a sentiment and sign your name",
    product_link:
      "https://www.uspoststamp.com/product-category/postcard/?per_page=24&stock_status=instock",
    category_id: 3,
  },
  {
    product_name: "Learn or continue language learning",
    product_content:
      "“Learning a new language through an immersive process does appear to improve functions like attention and mental alertness. It has been shown that people who speak other languages often exhibit more empathy and a global mindset.”",
    product_link:
      "https://try.babbel.com/flags-sem-brand-desktop/?bsc=bsbr_eng_us_ex&btp=default&msclkid=8c652fc90314181d2f484c0e2eb05f5a&utm_campaign=BG_BR_SRH_ct_ENGALL_gEN_cUS_ex&utm_content=141652795_4029890148_kwd-29465008160%3Aloc-190_80127039133412&utm_medium=cpc&utm_source=bing&utm_term=babbel+languages",
    category_id: 4,
  },
  {
    product_name: "Play or create music",
    product_content:
      "“Playing and learning an instrument can increase cognitive ability, confidence, patience and memory”",
    product_link: "https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa",
    category_id: 5,
  },
  {
    product_name: "Change into comfortable clothes",
    product_content:
      "“Wearing comfortable clothing can help relax your mind and/or worry about your clothes”",
    product_link:
      "https://oldnavy.gap.com/browse/product.do?pid=474324052&cid=3014636&pcid=1189220&vid=1&nav=meganav%3AFamily%20Outfits%3AFamily%20Outfits%3AFamily%20Pajamas#pdp-page-content",
    category_id: 6,
  },
  {
    product_name: "Drink 8-12 oz  water",
    product_content:
      "'Drinking water helps keep a normal temp. Cushion your joints, protect your spinal cord and help your body process waste' - CDC",
    product_link:
      "https://health.clevelandclinic.org/cold-water-vs-warm-water/",
    category_id: 1,
  },
  {
    product_name: "At home dance party",
    product_content:
      "“Other studies show that dance helps reduce stress, increases levels of the feel-good hormone serotonin, and helps develop new neural connections, especially in regions involved in executive function, long-term memory, and spatial recognition.” - Harvard Medical School ",
    product_link: "https://open.spotify.com/playlist/00zEzm3UcrpCciabJacQLo",
    category_id: 2,
  },
  {
    product_name: "Find a self improvement book through local library",
    product_content:
      "Reading a self improvement book allows you to work directly with an expert, open your mind to new approaches, and challenge yourself",
    product_link:
      "https://www.spl.org/books-and-media/books-and-ebooks/staff-picks/personal-finance",
    category_id: 3,
  },
  {
    product_name: "Work on a puzzle",
    product_content:
      "“Word puzzles help to expand your vocabulary, reduce anxiety, retain memory function, and stimulate creativity”",
    product_link: "https://www.nytimes.com/games/wordle/index.html",
    category_id: 4,
  },
  {
    product_name: "Make a simple budget",
    product_content:
      "“Making a budget allows you to plan and achieve your goals, prepare for emergencies, and make well informed choices”",
    product_link: "https://www.cnbc.com/select/how-to-create-a-budget-guide/",
    category_id: 5,
  },
  {
    product_name: "Assess and take something off your todo list ",
    product_content:
      "“Making your list realistic or smaller helps keep your goals achievable, manageable and keeps momentum of success going”",
    product_link:
      "https://www.theguardian.com/lifeandstyle/2017/may/10/the-psychology-of-the-to-do-list-why-your-brain-loves-ordered-tasks",
    category_id: 6,
  },
  //20 minutes
  {
    product_name: "Take a shower or bath ",
    product_content:
      "A warm shower or bath can elevate your mood, improve sleep, and relieve muscle pain",
    product_link: "https://health.clevelandclinic.org/reasons-to-take-a-bath/",
    category_id: 1,
  },
  {
    product_name: "Body weight training",
    product_content:
      "“Strength training can help increase your metabolism, confidence, and ability to move through everyday activities”",
    product_link:
      "https://www.nerdfitness.com/wp-content/uploads/2021/01/Beginner-Bodyweight-Workout_short-scaled.jpg",
    category_id: 2,
  },
  {
    product_name: "Listen to a self-help podcast",
    product_content:
      "“Listening to a podcast can cut down on screen time or eye fatigue, learning unique topics from experts, supporting small businesses, and collect skills for success”",
    product_link:
      "https://www.pushkin.fm/podcasts/the-happiness-lab-with-dr-laurie-santos",
    category_id: 3,
  },
  {
    product_name: "Listen to a distracting podcast",
    product_content:
      "“Listening to a fun podcast can help build your credibility of a niche topic, stimulates your mental imagery, and cut down on screen or eye fatigue”",
    product_link: "https://www.alieward.com/ologies",
    category_id: 4,
  },
  {
    product_name: "Baking Cooking Recipe",
    product_content:
      "“Adults who bake see a reduction in stress, improvement in appetite, support positive memories, help creativity and problem solving”",
    product_link:
      "https://cooking.nytimes.com/68861692-nyt-cooking/20651790-easy-baking-recipes",
    category_id: 5,
  },
  {
    product_name: "Charge electronics switch out batteries in home",
    product_content:
      "“Replacing batteries or charging devices preemptively can help prevent stressful situations like alarms beeping at night or a phone dying en route to an important appointment”",
    product_link: "https://www.youtube.com/watch?v=99hrmrs0SPw",
    category_id: 6,
  },
  //30 minutes
  {
    product_name: "Slowly eat your meals to savor the taste",
    product_content:
      "Research shows mindful eating can lead to greater wellbeing, increased pleasure of eating",
    product_link:
      "https://www.hsph.harvard.edu/nutritionsource/mindful-eating/",
    category_id: 1,
  },
  {
    product_name: "Yoga Class",
    product_content:
      "Regular yoga practice can be helpful for flexibility, muscle strength, improved respiration and protection from injury",
    product_link:
      "https://www.womenshealthmag.com/fitness/g29264172/best-yoga-videos/?utm_source=google&utm_medium=cpc&utm_campaign=arb_ga_whm_md_pmx_us_urlx_17871928004&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr7S0bw6J0j37Za1H1FZTTi-eas2Z8IjBPKfB8ecF2S7jJ6Ro41AM2MaAn75EALw_wcB",
    category_id: 2,
  },
  {
    product_name: "Make a DR. or DDS. appt.",
    product_content:
      "“Making regular Dr. and Dentists visits can help prevent or treat an early diagnosis and keep up with oral hygiene”",
    product_link:
      "https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect/",
    category_id: 3,
  },
  {
    product_name: "Read /listen to a fiction book",
    product_content:
      "“Reading fiction increases empathy, reduces stress, improves sleep, builds language, improves creativity, and strengthens problem solving skills”",
    product_link:
      "https://www.spl.org/books-and-media/books-and-ebooks/staff-picks/best-debut-fiction-of-2022",
    category_id: 4,
  },
  {
    product_name: "Organize your closet or bookshelf  by color",
    product_content:
      "“Making your spaces color coded or pleasing can cut down on time picking out clothes, and put you are ease or joy when looking at your favorite things”",
    product_link:
      "https://www.itssimplyplaced.com/benefits-organizing-color/#:~:text=Adding%20color%20will%20help%20you,finding%20the%20one%20you%20need.",
    category_id: 5,
  },
  {
    product_name: "Plan an early bedtime",
    product_content:
      "“An early bedtime can improve sleep quality, reduce risk of disease or virus, improves memory, produce more energy, and improve heart health”",
    product_link: "https://www.huffpost.com/entry/go-to-bed-early_b_7157026",
    category_id: 6,
  },
  // {
  //   product_name: "",
  //   product_content: "",
  //   product_link: "",
  //   category_id: 6,
  // },
  // {
  //   product_name: "",
  //   product_content: "",
  //   product_link: "",
  //   category_id: 6,
  // },
  // {
  //   product_name: "",
  //   product_content: "",
  //   product_link: "",
  //   category_id: 6,
  // },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
