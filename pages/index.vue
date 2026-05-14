<template>
  <div class="page">
    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Today's Lucky Number</h1>
        <p>Discover your personalized lucky numbers for today.</p>

        <div class="form-card">
          <div class="row">
            <div class="field">
              <label>Your Name</label>
              <input v-model="name" placeholder="Enter your name">
            </div>

            <div class="field">
              <label>Date of Birth</label>
              <input v-model="dob" type="date">
            </div>
          </div>

          <button @click="generateLuckyNumbers">
            Get Lucky Numbers
          </button>
        </div>

        <div v-if="numbers.length" class="result-box">
          <h2>Your Lucky Numbers</h2>
          <div class="number-grid">
            <div
              class="number"
              v-for="(n,index) in numbers"
              :key="index"
            >
              {{ n }}
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section">
      <h2>Daily Energy Guide</h2>
      <div class="cards">
        <div class="card" v-for="n in 6" :key="n">
          <h3>Positive Energy {{n}}</h3>
          <p>
            Your lucky numbers can be used for inspiration,
            personal reflection, goals and fun daily rituals.
          </p>
        </div>
      </div>
    </section>

    <section class="section faq">
      <h2>Frequently Asked Questions</h2>

      <div class="faq-item" v-for="n in 40" :key="n">
        <h3>Question {{n}}</h3>
        <p>
          Lucky numbers are often used as entertainment and personal inspiration.
          Different traditions use different methods.
        </p>
      </div>
    </section>

    <section class="section">
      <h2>About Lucky Numbers</h2>
      <p v-for="n in 60" :key="'p'+n">
        Lucky number systems appear in many cultures and are commonly used
        for fun, reflection, and symbolic meaning. This content section is
        intentionally extended for SEO content and page structure.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      dob: '',
      numbers: []
    }
  },

  head() {
    return {
      title: 'Today Lucky Number',
      meta: [
        {
          hid:'description',
          name:'description',
          content:'Find your today lucky numbers with a modern design.'
        }
      ]
    }
  },

  methods: {
    generateLuckyNumbers() {
      const result=[]

      let seed=(this.name.length||5)+Date.now()

      for(let i=0;i<6;i++){
        seed=(seed*9301+49297)%233280
        result.push((seed%99)+1)
      }

      this.numbers=result
    }
  }
}
</script>

<style scoped>
body{
margin:0;
padding:0;
}
.page{
font-family:Arial,sans-serif;
background:#f5f7fb;
}
.hero{
position:relative;
padding:100px 20px;
background:linear-gradient(135deg,#4f46e5,#7c3aed);
color:white;
}
.overlay{
position:absolute;
inset:0;
background:rgba(0,0,0,.15)
}
.hero-content{
position:relative;
max-width:1200px;
margin:auto;
z-index:2;
}
.hero h1{
font-size:54px;
margin-bottom:10px;
}
.hero p{
font-size:20px;
margin-bottom:30px;
}
.form-card{
background:white;
color:black;
padding:25px;
border-radius:20px;
box-shadow:0 10px 30px rgba(0,0,0,.1)
}
.row{
display:flex;
gap:20px;
flex-wrap:wrap
}
.field{
flex:1
}
label{
display:block;
margin-bottom:8px;
font-weight:bold
}
input{
width:100%;
padding:15px;
border:1px solid #ddd;
border-radius:12px;
box-sizing:border-box
}
button{
margin-top:20px;
padding:15px 30px;
border:none;
border-radius:12px;
cursor:pointer;
font-size:18px;
background:#4f46e5;
color:white
}
.result-box{
margin-top:30px;
background:white;
color:black;
padding:20px;
border-radius:20px
}
.number-grid{
display:grid;
grid-template-columns:repeat(6,1fr);
gap:15px
}
.number{
background:#4f46e5;
color:white;
padding:20px;
text-align:center;
font-size:28px;
border-radius:15px
}
.section{
padding:80px 20px;
max-width:1200px;
margin:auto
}
.section h2{
text-align:center;
margin-bottom:50px;
font-size:36px
}
.cards{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px
}
.card{
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 10px 30px rgba(0,0,0,.05)
}
.faq-item{
background:white;
padding:20px;
margin-bottom:20px;
border-radius:16px
}
@media(max-width:768px){
.cards{
grid-template-columns:1fr
}
.number-grid{
grid-template-columns:repeat(3,1fr)
}
.hero h1{
font-size:38px
}
}
</style>
