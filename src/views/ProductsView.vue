<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <productModal ref="productModal" :product-modal="itemSelect" :emit-hide-modal="hideModal" @emit-get-products="getProducts" @emit-toggle-loading="toggleLoading"></productModal>
          <deleteModal ref="deleteModal" :delete-modal="itemSelect" @emit-hideModal="hideModal" @emit-get-products="getProducts" @emit-toggle-loading="toggleLoading"></deleteModal>
          <h1>Products List</h1>
          <button class="btn d-block ms-auto" :class="{'btn-secondary': defaultTheme==='light','btn-outline-primary': defaultTheme==='dark'}" @click="productModal">建立新產品</button>
          <table class="table table-hover">
            <thead>
              <tr class="text-center">
                <th class="w-50" scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">查看細節</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id" class="text-center">
                <td class="w-50 text-start">{{ item.title }}</td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td :class="{'text-danger':textDanger(item.is_enabled),'text-light': textLight(item.is_enabled)}">{{ item.is_enabled? '啟用':'未啟用' }}</td>
                <td><button type="button" class="btn w-100 p-1" :class="{'btn-secondary': defaultTheme==='light','btn-outline-primary': defaultTheme==='dark'}" @click="checkProduct(item)">查看細節</button></td>
                <td colspan="2">
                  <button type="button" class="btn p-1 me-3" :class="{'btn-secondary': defaultTheme==='light','btn-outline-primary': defaultTheme==='dark'}" @click="productModal(item)">編輯</button>
                  <button type="button" class="btn p-1 btn-outline-danger" :class="{'text-primary': defaultTheme==='dark'}" @click="deleteProduct(item)">刪除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <pagination :pagination-obj="paginationObj" @emit-select-page="selectPage"></pagination>
        </div>
        <div class="col-lg-4" v-if="itemSelect.id">
          <h2>Product</h2>
          <div class="card mb-3" :class="{'border-primary': defaultTheme==='dark'}">
            <img :src="itemSelect.imageUrl" class="card-img-top object-fit-contain" :alt="itemSelect.title" height="400">
            <div class="card-body">
              <h5 class="card-title">{{ itemSelect.title }}<span class="badge ms-3" :class="{' text-bg-secondary': defaultTheme==='light',' text-bg-primary': defaultTheme==='dark'}">{{ itemSelect.category }}</span></h5>
              <p class="card-text">商品內容：{{ itemSelect.content }}</p>
              <p class="card-text">商品描述：{{ itemSelect.description }}</p>
              <p class="card-text">{{ itemSelect.price }} <span class="line-through" :class="{'text-light': defaultTheme==='dark'}">{{ itemSelect.origin_price }}</span>元 / 個</p>
            </div>
          </div>
          <div class="d-flex flex-wrap mb-3">
            <img :src="pic" :alt="'小圖' + key" v-for="(pic,key) in itemSelect.imagesUrl" :key="'小圖' + key" height="200" class="me-3 mb-3">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
const apiUrl=import.meta.env.VITE_API;
const apiPath=import.meta.env.VITE_PATH;
import pagination from '../components/Pagination.vue';
import productModal from '../components/ProductModal.vue';
import deleteModal from '../components/DeleteModal.vue';

export default {
  data(){
    return {
      products: [],
      paginationObj: {},
      itemSelect: {},
      productsNum: 0,
    }
  },
  components: {
    pagination,
    productModal,
    deleteModal,
  },
  props: ['defaultTheme'],
  watch: {
    defaultTheme(){
      
    }
  },
  methods: {
    textDanger(boolean){
      if(!boolean&&this.defaultTheme==='light'){
        return true;
      }
    },
    textLight(boolean){
      if(!boolean&&this.defaultTheme==='dark'){
        return true;
      }
    },
    async getAllProducts(){
      try {
        const result= (await this.axios.get(`${apiUrl}v2/api/${apiPath}/admin/products/all`)).data.products;
        this.productsNum=Object.keys(result);
      } catch (err) {
        console.log(err.response.data);
      }
    },
    async getProducts(page = 1){
      try {
        this.itemSelect={};
        this.product=[];
        this.$emit('emit-toggleLoading');
        const result = (await this.axios.get(`${apiUrl}v2/api/${apiPath}/admin/products?page=${page}`)).data;
        this.products=result.products;
        this.paginationObj=result.pagination;
        this.$emit('emit-toggleLoading');
        const sweetConfig={
          icon: 'success',
          title: '已取得產品資料',
          timer: 1500
        }
        this.$swal(sweetConfig);
      } catch (err) {
        console.log(err);
        this.$emit('emit-toggleLoading');
        const sweetConfig={
          icon: 'error',
          title: err.response.data.message,
        }
        this.$swal(sweetConfig);
      }
    },
    checkProduct(product){
      this.itemSelect=JSON.parse(JSON.stringify(product));
    },
    async postProduct(){
      try {
        const data={
            "data": {
            "title": "香蕉派",
            "category": "蛋糕",
            "origin_price": 200,
            "price": 150,
            "unit": "個",
            "description": "呈現經典的美味及口感。",
            "content": "尺寸：8寸",
            "is_enabled": 7,
            "imageUrl": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hJTIwcGllfGVufDB8fDB8fHww",
            "imagesUrl": [
            "https://images.unsplash.com/photo-1616953343564-dcf52de3262c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYSUyMHBpZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1517777596324-5df4025800f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmFuYSUyMHBpZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1636819232432-77f353ba39f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbmFuYSUyMHBpZXxlbnwwfHwwfHx8MA%3D%3D"
            ]
          }
        };
        const result= (await this.axios.post(`${apiUrl}v2/api/${apiPath}/admin/product`,data));
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    },
    async checkLogin(){
      try {
        this.$emit('emit-toggleLoading');
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1",);
        this.axios.defaults.headers.common['Authorization'] = token;
        const result=(await this.axios.post(`${apiUrl}v2/api/user/check`)).data;
        if(result.success){
          this.$emit('emit-toggleLogin',result.success);
          this.getProducts(1);
        }
        this.$emit('emit-toggleLoading');
      } catch (err) {
        this.$emit('emit-toggleLogin',err.response.data.success);
        const sweetConfig={
          icon: 'error',
          title: err.response.data.message,
          timer: 1500,
        }
        this.$swal(sweetConfig);
        this.$emit('emit-toggleLoading');
        if(!err.response.data.success){
          this.$router.push('login');
        }
      }
    },
    selectPage(page){
      this.getProducts(page)
    },
    productModal(product){
      if(product.id){
        this.itemSelect = {... product};
      }else{
        this.itemSelect = {
          imagesUrl: [],
        }
      }
      this.$refs.productModal.showModal();
    },
    deleteProduct(product){
      this.itemSelect = {...product};
      this.$refs.deleteModal.showModal();
    },
    hideModal(){
      this.itemSelect = {};
    },
    toggleLoading(){
      this.$emit('emit-toggleLoading');
    }
  },
  mounted(){
    this.$emit('emit-login');
    this.checkLogin();
    // this.postProduct();
    this.getAllProducts();
  },
}
</script>
<style lang="scss">
tbody{
  td{
    line-height: 2.375rem;
  }
}
.line-through{
  text-decoration: line-through;
}
</style>