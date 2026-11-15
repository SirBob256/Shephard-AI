"use client";

import { useState } from "react";

export default function Home(): import("react").JSX.Element {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [theme, setTheme] = useState("");
  const [verse, setVerse] = useState("");
  const [guidance, setGuidance] = useState("");
  const [prayer, setPrayer] = useState("");
  const [reflectionQuestions, setReflectionQuestions] = useState("");
  const [actionSteps, setActionSteps] = useState("");
  const [studyPlan, setStudyPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  function detectTheme(text: string) {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("worried") ||
      lowerText.includes("anxious") ||
      lowerText.includes("stress")
    ) {
      return "Anxiety";
    }

    if (
      lowerText.includes("alone") ||
      lowerText.includes("lonely") ||
      lowerText.includes("abandoned")
    ) {
      return "Loneliness";
    }

    if (
      lowerText.includes("sad") ||
      lowerText.includes("depressed") ||
      lowerText.includes("heartbroken")
    ) {
      return "Sadness";
    }

    if (
      lowerText.includes("fear") ||
      lowerText.includes("afraid") ||
      lowerText.includes("scared")
    ) {
      return "Fear";
    }

    if (lowerText.includes("purpose") || lowerText.includes("meaning")) {
      return "Purpose";
    }

    if (
      lowerText.includes("happy") ||
      lowerText.includes("joy") ||
      lowerText.includes("joyful") ||
      lowerText.includes("excited")
    ) {
      return "Joy";
    }

    if (
      lowerText.includes("thankful") ||
      lowerText.includes("grateful") ||
      lowerText.includes("blessed")
    ) {
      return "Gratitude";
    }

    if (
      lowerText.includes("doubt") ||
      lowerText.includes("doubtful") ||
      lowerText.includes("uncertain") ||
      lowerText.includes("confused")
    ) {
      return "Doubt";
    }

    if (
      lowerText.includes("sick") ||
      lowerText.includes("ill") ||
      lowerText.includes("pain") ||
      lowerText.includes("hospital")
    ) {
      return "Sickness";
    }

    if (
      lowerText.includes("angry") ||
      lowerText.includes("anger") ||
      lowerText.includes("furious") ||
      lowerText.includes("mad")
    ) {
      return "Anger";
    }

    if (
      lowerText.includes("tired") ||
      lowerText.includes("exhausted") ||
      lowerText.includes("burnout") ||
      lowerText.includes("weary") ||
      lowerText.includes("drained")
    ) {
      return "Burnout";
    }

    if (
      lowerText.includes("stress") ||
      lowerText.includes("overwhelmed") ||
      lowerText.includes("pressure")
    ) {
      return "Stress";
    }

    if (
      lowerText.includes("grief") ||
      lowerText.includes("grieving") ||
      lowerText.includes("loss") ||
      lowerText.includes("mourning")
    ) {
      return "Grief";
    }

    if (
      lowerText.includes("forgive") ||
      lowerText.includes("forgiveness") ||
      lowerText.includes("resent") ||
      lowerText.includes("resentment")
    ) {
      return "Forgiveness";
    }

    if (lowerText.includes("hope") || lowerText.includes("hopeful")) {
      return "Hope";
    }

    if (
      lowerText.includes("confused") ||
      lowerText.includes("confusion") ||
      lowerText.includes("uncertain") ||
      lowerText.includes("lost")
    ) {
      return "Confusion";
    }

    if (
      lowerText.includes("rejected") ||
      lowerText.includes("left out") ||
      lowerText.includes("unwanted")
    ) {
      return "Rejection";
    }

    if (
      lowerText.includes("tempted") ||
      lowerText.includes("temptation") ||
      lowerText.includes("sin") ||
      lowerText.includes("struggling")
    ) {
      return "Temptation";
    }

    return "General";
  }

  function getVerse(theme: string) {
    if (theme === "Anxiety") {
      const verses = [
        "Philippians 4:6-7 - Do not be anxious about anything...",
        "Isaiah 41:10 - Fear not, for I am with you...",
        "Psalm 46:1 - God is our refuge and strength, an ever-present help in trouble.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Loneliness") {
      const verses = [
        "Deuteronomy 31:6 - The Lord your God goes with you; He will never leave you nor forsake you.",
        "Psalm 68:6 - God sets the lonely in families.",
        "Joshua 1:9 - Be strong and courageous, for the Lord your God is with you.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Sadness") {
      const verses = [
        "Psalm 34:18 - The Lord is close to the brokenhearted.",
        "Matthew 5:4 - Blessed are those who mourn.",
        "Revelation 21:4 - He will wipe every tear from their eyes.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Fear") {
      const verses = [
        "Isaiah 41:10 - Fear not, for I am with you.",
        "Joshua 1:9 - Be strong and courageous.",
        "Psalm 56:3 - When I am afraid, I put my trust in You.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Purpose") {
      const verses = [
        "Jeremiah 29:11 - For I know the plans I have for you.",
        "Proverbs 3:5-6 - Trust in the Lord with all your heart.",
        "Psalm 138:8 - The Lord will fulfill His purpose for me.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Joy") {
      const verses = [
        "Psalm 118:24 - Let us rejoice and be glad in it.",
        "Nehemiah 8:10 - The joy of the Lord is your strength.",
        "John 15:11 - My joy may be in you.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Gratitude") {
      const verses = [
        "1 Thessalonians 5:18 - Give thanks in all circumstances.",
        "Psalm 107:1 - Give thanks to the Lord, for He is good.",
        "Colossians 3:15 - Be thankful.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Doubt") {
      const verses = [
        "Proverbs 3:5-6 - Trust in the Lord.",
        "James 1:5 - If any of you lacks wisdom, ask God.",
        "Mark 9:24 - I believe; help my unbelief.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Sickness") {
      const verses = [
        "Jeremiah 30:17 - I will restore you to health.",
        "Psalm 147:3 - He heals the brokenhearted.",
        "Exodus 15:26 - I am the Lord who heals you.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Anger") {
      const verses = [
        "Ephesians 4:26 - In your anger do not sin.",
        "James 1:19 - Be quick to listen, slow to become angry.",
        "Proverbs 15:1 - A gentle answer turns away wrath.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Burnout") {
      const verses = [
        "Matthew 11:28 - Come to me, all who are weary.",
        "Isaiah 40:31 - Those who hope in the Lord will renew their strength.",
        "Psalm 23:1-3 - He restores my soul.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Stress") {
      const verses = [
        "Psalm 55:22 - Cast your burden on the Lord.",
        "Philippians 4:6-7 - Do not be anxious about anything.",
        "Psalm 46:1 - God is our refuge and strength.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Grief") {
      const verses = [
        "Matthew 5:4 - Blessed are those who mourn.",
        "Psalm 34:18 - The Lord is close to the brokenhearted.",
        "Revelation 21:4 - He will wipe away every tear.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Forgiveness") {
      const verses = [
        "Ephesians 4:32 - Forgive as Christ forgave you.",
        "Colossians 3:13 - Bear with each other and forgive.",
        "Matthew 6:14 - If you forgive others, your heavenly Father will forgive you.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Hope") {
      const verses = [
        "Romans 15:13 - May the God of hope fill you with joy and peace.",
        "Jeremiah 29:11 - For I know the plans I have for you.",
        "Psalm 42:11 - Put your hope in God.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Confusion") {
      const verses = [
        "Proverbs 3:5-6 - Trust in the Lord with all your heart.",
        "James 1:5 - Ask God for wisdom.",
        "Psalm 32:8 - I will instruct you and teach you.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Rejection") {
      const verses = [
        "Psalm 27:10 - The Lord will receive me.",
        "Romans 8:38-39 - Nothing can separate us from God's love.",
        "Isaiah 41:10 - Fear not, for I am with you.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    if (theme === "Temptation") {
      const verses = [
        "1 Corinthians 10:13 - God is faithful.",
        "Matthew 26:41 - Watch and pray.",
        "Psalm 119:11 - I have hidden Your word in my heart.",
      ];
      return verses[Math.floor(Math.random() * verses.length)];
    }

    return "Psalm 119:105 - Your word is a lamp to my feet and a light to my path.";
  }

  function getGuidance(theme: string) {
    if (theme === "Anxiety") {
      return "God understands your worries and invites you to bring every concern to Him. Trust Him with your fears and allow His peace to guard your heart.";
    }

    if (theme === "Loneliness") {
      return "Even when you feel alone, God promises never to leave you. His presence is constant and His love never fails.";
    }

    if (theme === "Sadness") {
      return "God is close to the brokenhearted. He sees your pain, understands your struggles, and offers comfort in difficult times.";
    }

    if (theme === "Fear") {
      return "Fear may feel overwhelming, but God walks beside you. Trust that He is greater than every challenge you face.";
    }

    if (theme === "Purpose") {
      return "Your life has value and meaning in God's plan. Continue seeking Him and trust that He will guide your steps.";
    }

    if (theme === "Joy") {
      return "Joy is a gift from God. Celebrate His goodness and look for ways to share that joy with others.";
    }

    if (theme === "Gratitude") {
      return "A thankful heart draws us closer to God. Take time to reflect on His blessings and faithfulness.";
    }

    if (theme === "Doubt") {
      return "Questions and uncertainty are part of faith. God invites you to trust Him even when you do not understand everything.";
    }

    if (theme === "Sickness") {
      return "God sees your pain and cares deeply about your healing and well-being. Continue seeking Him for comfort and strength.";
    }

    if (theme === "Anger") {
      return "Anger is natural, but God calls us to respond with wisdom and self-control. Bring your frustrations to Him.";
    }

    if (theme === "Burnout") {
      return "God does not expect you to carry every burden alone. Rest in His presence and allow Him to renew your strength.";
    }

    if (theme === "Stress") {
      return "Life can feel overwhelming, but God invites you to cast your burdens on Him. He cares for you deeply.";
    }

    if (theme === "Grief") {
      return "God walks with you through seasons of loss and sorrow. His comfort brings hope even in pain.";
    }

    if (theme === "Forgiveness") {
      return "Forgiveness is difficult, but God helps us let go of bitterness and experience freedom through grace.";
    }

    if (theme === "Hope") {
      return "God is the source of true hope. Even when circumstances seem difficult, He is at work in your life.";
    }

    if (theme === "Confusion") {
      return "When life feels uncertain, God provides wisdom and direction. Lean on Him for guidance.";
    }

    if (theme === "Rejection") {
      return "People may reject you, but God's love never fails. Your worth is found in Him.";
    }

    if (theme === "Temptation") {
      return "Temptation is something everyone faces. God promises strength and a way forward when we trust Him.";
    }

    return "God's Word provides wisdom and direction for every season of life.";
  }

  function getPrayer(theme: string, message: string) {
    if (theme === "Joy") {
      return "Heavenly Father, thank You for the joy and blessings You have given me. Help me share that joy with others. Amen.";
    }

    if (theme === "Gratitude") {
      return "Heavenly Father, thank You for Your faithfulness and goodness. Help me remain thankful in every circumstance. Amen.";
    }

    if (theme === "Doubt") {
      return "Heavenly Father, strengthen my faith when I struggle with uncertainty. Help me trust You completely. Amen.";
    }

    if (theme === "Sickness") {
      return "Heavenly Father, bring healing, comfort, and strength. Help me place my trust in You during this difficult time. Amen.";
    }

    if (theme === "Anger") {
      return "Heavenly Father, help me surrender my anger to You. Fill my heart with wisdom, peace, and self-control. Amen.";
    }

    if (theme === "Burnout") {
      return "Heavenly Father, I feel tired and exhausted. Renew my strength and help me find rest in You. Amen.";
    }

    if (theme === "Stress") {
      return "Heavenly Father, life feels overwhelming. Help me cast my burdens on You and trust Your care. Amen.";
    }

    if (theme === "Grief") {
      return "Heavenly Father, comfort my heart during this time of grief. Remind me that You are always near. Amen.";
    }

    if (theme === "Forgiveness") {
      return "Heavenly Father, help me forgive others as You have forgiven me. Heal my heart and fill it with grace. Amen.";
    }

    if (theme === "Hope") {
      return "Heavenly Father, fill my heart with hope and remind me of Your promises. Amen.";
    }

    if (theme === "Confusion") {
      return "Heavenly Father, grant me wisdom and clarity. Guide me as I seek Your direction. Amen.";
    }

    if (theme === "Rejection") {
      return "Heavenly Father, remind me that I am loved and accepted by You. Help me find confidence in Your love. Amen.";
    }

    if (theme === "Temptation") {
      return "Heavenly Father, give me strength to resist temptation and choose what honors You. Amen.";
    }

    return `Heavenly Father, I bring before You this concern: "${message}". Please guide me, strengthen me, and help me trust in You. Amen.`;
  }

  function getReflectionQuestions(theme: string) {
    if (theme === "Anxiety") {
      return `
• What is causing the most stress in your life right now?

• What worries do you need to surrender to God?

• Which promise in this verse encourages you most?
`;
    }

    if (theme === "Joy") {
      return `
• What blessing are you most thankful for today?

• How can you share your joy with others?

• How has God been faithful recently?
`;
    }

    if (theme === "Gratitude") {
      return `
• What are three things you can thank God for?

• How has God blessed you this week?

• How can you express gratitude today?
`;
    }

    if (theme === "Doubt") {
      return `
• What questions are weighing on your mind?

• When has God been faithful before?

• What would trusting God look like today?
`;
    }

    if (theme === "Sickness") {
      return `
• What support do you need most right now?

• How can you invite God into your healing journey?

• What gives you hope during this season?
`;
    }

    if (theme === "Anger") {
      return `
• What is the root cause of your anger?

• Is there someone you need to forgive?

• How can you respond in a godly way?
`;
    }

    return `
• How is God speaking to you through this verse?

• What challenge are you currently facing?

• What step could help you grow closer to God?
`;
  }

  function getActionSteps(theme: string) {
    if (theme === "Anxiety") {
      return `
• Spend 5 minutes in prayer.

• Read Philippians 4:6-7.

• Write down your worries and surrender them to God.
`;
    }

    if (theme === "Sadness") {
      return `
• Read Psalm 34:18.

• Write down your feelings.

• Share your struggles with someone you trust.
`;
    }

    if (theme === "Fear") {
      return `
• Memorize Isaiah 41:10.

• Pray specifically about your fears.

• Take one step of faith today.
`;
    }

    if (theme === "Burnout") {
      return `
• Take time to rest today.

• Read Matthew 11:28.

• Spend quiet time with God.
`;
    }

    if (theme === "Stress") {
      return `
• List your top concerns.

• Pray over each one.

• Read Psalm 55:22.
`;
    }

    return `
• Spend time in prayer.

• Read today's Bible verse again.

• Reflect on one way to grow closer to God.
`;
  }

  function getStudyPlan(theme: string) {
    if (theme === "Anxiety") {
      return `
Day 1
Philippians 4:6-7
Focus: Giving your worries to God.

Day 2
Matthew 6:25-34
Focus: Trusting God's provision.

Day 3
Psalm 46:1
Focus: Finding peace in God's presence.
`;
    }

    if (theme === "Sadness") {
      return `
Day 1
Psalm 34:18
Focus: God's comfort.

Day 2
Matthew 5:4
Focus: God's promises.

Day 3
Revelation 21:4
Focus: Future hope.
`;
    }

    if (theme === "Fear") {
      return `
Day 1
Isaiah 41:10
Focus: God's presence.

Day 2
Joshua 1:9
Focus: Courage.

Day 3
Psalm 56:3
Focus: Trust.
`;
    }

    if (theme === "Joy") {
      return `
Day 1
Psalm 118:24
Focus: Celebrating God's goodness.
Reflection: Write down three blessings from today.

Day 2
Nehemiah 8:10
Focus: Strength through joy.
Reflection: How has God's joy helped you overcome challenges?

Day 3
John 15:11
Focus: Lasting joy in Christ.
Reflection: How can you share your joy with someone else?
`;
    }

    if (theme === "Gratitude") {
      return `
Day 1
1 Thessalonians 5:18
Focus: Giving thanks in every situation.
Reflection: What are five things you are thankful for today?

Day 2
Psalm 107:1
Focus: Remembering God's faithfulness.
Reflection: Recall a recent prayer God answered.

Day 3
Colossians 3:15
Focus: Living with a thankful heart.
Reflection: How can you express gratitude to someone today?
`;
    }

    if (theme === "Doubt") {
      return `
Day 1
Proverbs 3:5-6
Focus: Trusting beyond understanding.
Reflection: What questions do you need to surrender to God?

Day 2
Mark 9:24
Focus: Honest faith.
Reflection: In what area do you need God's help strengthening your faith?

Day 3
James 1:5
Focus: Seeking divine wisdom.
Reflection: What guidance are you asking God for?
`;
    }

    if (theme === "Loneliness") {
      return `
Day 1
Deuteronomy 31:6
Focus: God never leaves you.
Reflection: When have you felt God's presence before?

Day 2
Psalm 68:6
Focus: Belonging.
Reflection: Who has God placed in your life for support?

Day 3
Joshua 1:9
Focus: Courage through companionship with God.
Reflection: How can you strengthen a meaningful relationship today?
`;
    }

    if (theme === "Purpose") {
      return `
Day 1
Jeremiah 29:11
Focus: God's plans for your future.
Reflection: What dreams has God placed on your heart?

Day 2
Proverbs 3:5-6
Focus: Trusting God's direction.
Reflection: What decision do you need guidance on?

Day 3
Psalm 138:8
Focus: God's purpose for your life.
Reflection: How can you use your gifts to serve others?
`;
    }

    if (theme === "Sickness") {
      return `
Day 1
Jeremiah 30:17
Focus: God's healing.
Reflection: What healing do you need physically, emotionally, or spiritually?

Day 2
Psalm 147:3
Focus: God's comfort.
Reflection: What comfort has God already provided?

Day 3
Exodus 15:26
Focus: Trusting the Great Physician.
Reflection: How can you continue trusting God during recovery?
`;
    }

    if (theme === "Anger") {
      return `
Day 1
Ephesians 4:26
Focus: Handling anger wisely.
Reflection: What is truly causing your anger?

Day 2
James 1:19
Focus: Listening first.
Reflection: Could better understanding improve this situation?

Day 3
Proverbs 15:1
Focus: Responding with gentleness.
Reflection: What would a Christ-like response look like?
`;
    }

    if (theme === "Burnout") {
      return `
Day 1
Matthew 11:28
Focus: Receiving God's rest.
Reflection: What burden feels heaviest right now?

Day 2
Isaiah 40:31
Focus: Renewed strength.
Reflection: Where do you need God's strength today?

Day 3
Psalm 23
Focus: Restoration.
Reflection: What healthy habit can help restore your energy?
`;
    }

    if (theme === "Stress") {
      return `
Day 1
Psalm 55:22
Focus: Casting burdens on God.
Reflection: What is causing the most pressure right now?

Day 2
Philippians 4:6-7
Focus: Prayer instead of anxiety.
Reflection: What worry do you need to surrender?

Day 3
Psalm 46:1
Focus: God as your refuge.
Reflection: Where have you seen God's help recently?
`;
    }

    if (theme === "Grief") {
      return `
Day 1
Matthew 5:4
Focus: God's comfort.
Reflection: What loss are you grieving?

Day 2
Psalm 34:18
Focus: God is near.
Reflection: How have you experienced God's presence?

Day 3
Revelation 21:4
Focus: Future hope.
Reflection: What promise of God brings you comfort today?
`;
    }

    if (theme === "Forgiveness") {
      return `
Day 1
Ephesians 4:32
Focus: Forgiving as Christ forgave.
Reflection: Who do you need to forgive?

Day 2
Matthew 6:14
Focus: Receiving and giving grace.
Reflection: How has God forgiven you?

Day 3
Colossians 3:13
Focus: Living free from bitterness.
Reflection: What step toward healing can you take today?
`;
    }

    if (theme === "Hope") {
      return `
Day 1
Romans 15:13
Focus: Hope through faith.
Reflection: What are you trusting God for?

Day 2
Jeremiah 29:11
Focus: A hopeful future.
Reflection: What future goal excites you?

Day 3
Psalm 42:11
Focus: Choosing hope daily.
Reflection: How can you encourage someone who feels discouraged?
`;
    }

    if (theme === "Confusion") {
      return `
Day 1
Proverbs 3:5-6
Focus: Trusting God's wisdom.
Reflection: What situation confuses you most?

Day 2
James 1:5
Focus: Asking for wisdom.
Reflection: What question would you like God to answer?

Day 3
Psalm 32:8
Focus: God's guidance.
Reflection: What next step seems most wise today?
`;
    }

    if (theme === "Rejection") {
      return `
Day 1
Psalm 27:10
Focus: God's acceptance.
Reflection: How has rejection affected you?

Day 2
Isaiah 41:10
Focus: God's presence.
Reflection: What truth about your identity should you remember?

Day 3
Romans 8:38-39
Focus: Unbreakable love.
Reflection: How does God's love change your perspective?
`;
    }

    if (theme === "Temptation") {
      return `
Day 1
1 Corinthians 10:13
Focus: God's faithfulness.
Reflection: What triggers this temptation?

Day 2
Matthew 26:41
Focus: Watch and pray.
Reflection: What practical boundaries could help?

Day 3
Psalm 119:11
Focus: Strength through Scripture.
Reflection: What verse can you memorize for future strength?
`;
    }

    return `
Day 1
Psalm 119:105
Focus: God's guidance.

Day 2
Proverbs 3:5-6
Focus: Trusting God.

Day 3
Jeremiah 29:11
Focus: Hope and purpose.
`;
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
width: "100%",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
        background: `
radial-gradient(circle at top left, rgba(147,197,253,0.5), transparent 30%),
radial-gradient(circle at top right, rgba(196,181,253,0.4), transparent 30%),
radial-gradient(circle at bottom left, rgba(125,211,252,0.3), transparent 25%),
linear-gradient(180deg, #eef5ff 0%, #dbeafe 50%, #c7d2fe 100%)
`,
      }}
    >
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
    animation: "flyIn 1.8s ease-out forwards",
  }}
>
  <div
    style={{
      fontSize: "60px",
    }}
  >
    🕊️
  </div>

  <h1
    style={{
      fontSize: "68px",
     animation: "hoverFloat 3s ease-in-out infinite",
      filter: "drop-shadow(0 0 12px rgba(255,255,255,0.8))",
      fontWeight: "900",
      margin: "0",

      background:
        "linear-gradient(135deg,#1e3a8a,#3b82f6,#93c5fd)",

      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",

      letterSpacing: "-2px",
    
    }}
  >
    Shepherd AI
  </h1>
</div>
      
  <p
  style={{
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
    color: "#475569",
    marginBottom: "40px",
  }}
>
  ✨ Biblical wisdom powered by AI
</p>
      <div
        style={{
background: "rgba(255,255,255,0.18)",backdropFilter: "blur(20px)",
WebkitBackdropFilter: "blur(20px)",
padding: "35px",
borderRadius: "25px",
marginTop: "30px",
marginBottom: "30px",
boxShadow:
  `
  0 20px 80px rgba(59,130,246,0.25),
  0 0 40px rgba(147,197,253,0.5)
  `,
border: "1px solid rgba(255,255,255,0.6)",
      }}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Share what's on your heart today..."
        rows={5}
        style={{
          width: "100%",
          padding: "20px",
          marginTop: "20px",
          border: "2px solid rgba(255,255,255,0.45)",
          borderRadius: "2px solid #e1e6ec",
          fontSize: "17px",
          resize: "none",
background: "rgba(202, 210, 212, 0.35)",
          color: "#030303",
          backdropFilter: "blur(10px)",
WebkitBackdropFilter: "blur(10px)",
boxShadow:
  "0 15px 40px rgba(216, 34, 28, 0.08)",
        }}
      />

      {error && (
        <div
          style={{
            marginTop: "15px",
            padding: "12px 16px",
            borderRadius: "10px",
            backgroundColor: "#fef2f2",
            border: "1px solid #fca5a5",
            color: "#b91c1c",
            fontWeight: "600",
          }}
        >
          {error}
        </div>
      )}

      <button
        onClick={() => {
          const trimmedMessage = message.trim();

          if (!trimmedMessage) {
            setError("Please share what is on your heart before requesting guidance.");
            return;
          }

          setLoading(true);
          setError("");

          try {
            const detectedTheme = detectTheme(trimmedMessage);
            setSubmittedMessage(trimmedMessage);
            setTheme(detectedTheme);
            setVerse(getVerse(detectedTheme));
            setGuidance(getGuidance(detectedTheme));
            setPrayer(getPrayer(detectedTheme, trimmedMessage));
            setReflectionQuestions(getReflectionQuestions(detectedTheme));
            setActionSteps(getActionSteps(detectedTheme));
            setStudyPlan(getStudyPlan(detectedTheme));
          } catch {
            setError("Unable to generate guidance. Please try again.");
          } finally {
            setLoading(false);
          }
        }}
        disabled={loading}
        style={{
          padding: "16px 36px",
          background:
            "linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)",
          color: "white",
          border: "none",
          borderRadius: "15px",
          fontSize: "17px",
          fontWeight: "700",
          cursor: loading ? "not-allowed" : "pointer",
          marginTop: "20px",
          opacity: loading ? 0.7 : 1,
          boxShadow:
            "0 10px 25px rgba(37,99,235,0.35)",
        }}
      >
        {loading ? "Generating Guidance..." : "Get Guidance"}
      </button>
    </div>

    {submittedMessage && (
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          backgroundColor: "#f9fafb",
        }}
      >
        <h2
          style={{
            color: "#1e3a8a",
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "25px",
            fontWeight: "800",
          }}
        >
          ✨ Your Personalized Guidance
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          <strong>Your Situation:</strong>{" "}
          {submittedMessage}
        </p>

        {theme && (
          <div
            style={{
              marginTop: "20px",
              animation: "hoverFloat 3s ease-in-out infinite",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#dbeafe",
              border: "1px solid #93c5fd",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>🎯 Theme</strong>
            <p>{theme}</p>
          </div>
        )}

        {verse && (
          <div
            style={{
              marginTop: "20px",
              animation: "hoverFloat 3s ease-in-out infinite",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#fef3c7",
              border: "1px solid #fcd34d",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
                

            }}
          >
            <strong>📖 Bible Verse</strong>
            <p>{verse}</p>
          </div>
        )}

        {guidance && (
          <div
            style={{
              marginTop: "20px",
              animation: "hoverFloat 3s ease-in-out infinite",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#dcfce7",
              border: "1px solid #86efac",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>💡 Guidance</strong>
            <p>{guidance}</p>
          </div>
        )}

        {prayer && (
          <div
            style={{
              marginTop: "25px",
              animation: "hoverFloat 3s ease-in-out infinite",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#f3e8ff",
              border: "1px solid #c084fc",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>🙏 Prayer</strong>
            <p>{prayer}</p>
          </div>
        )}

        {reflectionQuestions && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#ffedd5",
              border: "1px solid #fdba74",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>🤔 Reflection Questions</strong>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "Arial",
              }}
            >
              {reflectionQuestions}
            </pre>
          </div>
        )}

        {actionSteps && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#ccfbf1",
              border: "1px solid #5eead4",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>✅ Action Steps</strong>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "Arial",
              }}
            >
              {actionSteps}
            </pre>
          </div>
        )}

        {studyPlan && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#e0e7ff",
              border: "1px solid #a5b4fc",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>📚 3-Day Study Plan</strong>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "Arial",
              }}
            >
              {studyPlan}
            </pre>
          </div>
        )}
      </div>
    )}
  
  </main>
  );
}


