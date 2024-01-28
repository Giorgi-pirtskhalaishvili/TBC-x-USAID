class CustomCard extends HTMLElement {
  constructor(options = {}) {
    super();
    this.attachShadow({ mode: "open" });

    const title = options.title || "";
    const status = options.status || "";
    const imgurl = options.imgurl || "";
    const imgArrow = options.imgArrow || "";

    this.shadowRoot.innerHTML = `
        <style>

.card {
    border: 2px solid grey;
    width:90%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items: start;
    justify-content: start;
    border-radius: 8px;
     }

.card .nameStatus {
    color: #f4f4f4;
    margin: 2% 6%;
    height: 30%;
    }

.nameStatus .title {
    font-size: 1.3rem;
    margin: 10% 0;

    }   

img {
    width:100%;
    height:auto;
    object-fit:contain;
    border-radius: 8px;
    }


.courseDetails {
    color: #00a3e0;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-top:25%;
    }
.courseDetails img {
    width: 20%;
    height: 50%;
    }

.courseDetails p {
   cursor: pointer;
   font-size: 1.1rem;
}
.courseDetails p:hover {
  filter: brightness(0.5);
  transition: 0.4s;
}

@media only screen and (max-width: 600px) {
 .card {
    width:90%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items: start;
    justify-content: start;
    border-radius: 8px;
    margin:0 auto;
     } 
  .courseDetails {
    margin-top:5%;
    }
  .nameStatus {
     font-size: 1.2rem;
  }
}
@media only screen and (min-width: 601px) and (max-width: 768px) {
 .card {
    border:2px solid grey;
    margin:0 auto;
     } 
  .courseDetails {
    margin:5% 5% 0;
    }
  .courseDetails img {
    width:10%;
  }
  .courseDetails p {
   font-size:2rem;
  }

  .nameStatus .title,  
  .nameStatus  {
     font-size: 2rem;
     }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .card {
    border:2px solid grey;
    margin:0 auto;
     } 
  .courseDetails {
    margin:5% 5% 0;
    }
  .courseDetails img {
    width:10%;
  }
  .courseDetails p {
   font-size:2rem;
  }

  .nameStatus .title,  
  .nameStatus  {
     font-size: 2rem;
     }


  }
        </style>

          <div class="card">
            <img src="${imgurl}" />
            <span class="nameStatus">  
              <div class="title">${title}</div>
              <div class="status">${status}</div>
           </span>
            <div class="courseDetails" > 
              <img src="${imgArrow}" />
               <p> კურსის დეტალები</p>
            </div>
       
        </div>
      
      `;
  }
}
customElements.define("custom-card", CustomCard);
