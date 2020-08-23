Vue.component("product", {
    props:{
        premium: {
            type:Boolean,
            required: true,
            default: false
        }
    },
    template:
    `<div class="product-box">
        <div class="image-box">
            <img v-bind:src="productImage" alt=""/>
            <!--alt, href, title, class, style, disabled 다 들어갈 수 있음-->
        </div>
        <div class="product-info">
            <h1>상품명 : {{productName}}</h1>
            <!--v-show 는 style에 none을 부여하여 처리 v-if는 엘리먼트 자체를 삭제-->
            <!--보통은 v-if 선호-->
            <p v-if="storage > 10">
                제고 있음({{ storage }}개)
            </p>
            <p v-else-if="10>=storage && storage>0">
                매진 임박({{ storage }}개)
            </p>
            <p v-else>
                매진({{ storage }}개)
            </p>
            <p>
                배송비 : {{premium ? '무료' : '3,000원'}}
            </p>
            <ul>
                <li v-for="feature in features">
                    {{feature}}
                </li>
            </ul>
            <div class="color-box">
                <!--style은 객체 오브젝트로 부여-->
                <!--@mouseover, @keydown @keydown.enter (modifier) 기능 사용가능-->
                <!--heyup , mouseover, click, dblclick, submit, etc => javascript event name 동일-->
                <div :style="{'backgroundColor': product.backgroundColor}" v-for="product, index in products" @click="onProductClick(index)"></div>
            </div>

            <div class="btn-box">
                <a href="javascript:void(0);" class="add-cart-btn" @click="onAddCart">
                    장바구니
                </a>
            </div>
        </div>
        <div class="review-box">
            <ul>
                <li v-for="error in reviewErrors">{{error}}</li>
            </ul>
            <div class="review-title">
                <label for="reviewTitle">리뷰 제목</label>
                <input id="reviewTitle" type="text" v-model="reviewTitle"/>
            </div>
            <div class="review-score">
                <label for="reviewScore">점수</label>
                <select id="reviewScore" v-model="reviewScore">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
            <div class="review-content">
                <textarea placeholder="내용을 적어주세요." v-model="reviewContent"></textarea>
            </div>
            <div class="btn-box">
                <a href="javascript:void(0);" @click="onSendReview">입력</a>
            </div>
        </div>
    </div>`,
    data() {
        return {
            selectedIndex:0,
            reviewTitle:null,
            reviewScore:5,
            reviewContent:null,
            reviewList:[],
            reviewErrors:[],
            products: [
                {
                    productCode:'switch_neon',
                    productName: '닌텐도 스위치 - Neon',
                    image:'assets/images/product1.png',
                    backgroundColor: '#ff0048',
                    storage:50,
                    features: [
                        '3가지 스타일로 플레이 할 수 있습니다.',
                        'Joy-Con 1세트 포함',
                        'Switch Dock 1개 포함',
                        '102mm 세로 : 239mm 무게: 13.9cm',
                        '약 398g',
                        '6.2인치 디스플레이 탑재',
                        '알록달록한 네온컬러'
                    ]
                },
                {
                    productCode:'switch_gray',
                    productName: '닌텐도 스위치 - gray',
                    image:'assets/images/product2.png',
                    backgroundColor: '#999',
                    storage:20,
                    features: [
                        '3가지 스타일로 플레이 할 수 있습니다.',
                        'Joy-Con 1세트 포함',
                        'Switch Dock 1개 포함',
                        '102mm 세로 : 239mm 무게: 13.9cm',
                        '약 398g',
                        '6.2인치 디스플레이 탑재',
                        '알록달록한 네온컬러'
                    ]
                }
            ]
        };
    },
    methods:{
        onSendReview(){
            let obj = {};
            obj.reviewTitle = this.reviewTitle;
            obj.reviewScore = this.reviewScore;
            obj.reviewContent = this.reviewContent;

            this.reviewErrors = [];

            if(this.reviewTitle==null || this.reviewContent==null){
                if(this.reviewTitle == null){
                    this.reviewErrors.push("리뷰 타이틀을 입력해주세요.");
                }
    
                if(this.reviewContent == null){
                    this.reviewErrors.push("리뷰 내용을 입력해주세요.");
                }

                return;
            }

            this.reviewList.push(obj);

            this.reviewContent = null;
            this.reviewScore = 5;
            this.reviewTitle = null;
        },
        onProductClick(index){
            // this = data
            this.selectedIndex = index;
        },
        onAddCart(){
            var item = this.products[this.selectedIndex];
            if(item.storage>0){
                // this.cartList.push(this.products[this.selectedIndex].productCode);
                this.$emit("add-cart", item.productCode);
            }else{
                alert("제고가 없습니다.");
                return;
            }

            item.storage -= 1;
        }
    },
    //data 에 없으면 computed 찾아감
    computed:{
        //text 노출 전 전처리 과정 가능
        productName() {
            return this.products[this.selectedIndex].productName;
        },
        storage(){
            return this.products[this.selectedIndex].storage;
        },
        features() {
            return this.products[this.selectedIndex].features;
        },
        productImage(){
            return this.products[this.selectedIndex].image;
        }
    }
});


var app = new Vue({
    el:'#app',
    data: {
        premium:true,
        cartList:[]
    },
    methods: {
        onAddCart(productCode){
            this.cartList.push(productCode);
        }
    }
});