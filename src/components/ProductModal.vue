<template>
    <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
        <v-form class="modal-content" v-slot="{ errors }" @submit="onSubmit">
        <div class="modal-header">
            <h5 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hideModal"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-12 mb-3 d-flex flex-column">
                            <input type="text" placeholder="請輸入圖片網址" name="imageUrl" class="form-control" :class="{'is-invalid': !tempProduct.imageUrl}" v-model="imageUrl" v-if="!imageUrl">
                            <span class="invalid-feedback" name="imageUrl">請輸入主圖照片</span>
                            <input type="file" :disabled="disabled" @change="loadFile">
                            <button type="button" class="btn btn-primary me-3" @click="addProductImage">新增</button>
                        </div>
                        <div class="col-12 mb-3 position-relative" v-if="imageUrl">
                            <img :src="imageUrl" alt="edit product pic" class="object-fit-cover w-100">
                            <span class="position-absolute top-0 start-75 translate-middle badge rounded-circle bg-danger me-3" @click="deleteImageUrl">
                                -
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 position-relative mb-3" v-if="tempProduct.imageUrl">
                            <img :src="tempProduct.imageUrl" alt="'imageUrl'" class="object-fit-cover w-100">
                            <span class="position-absolute top-0 start-75 translate-middle badge rounded-circle bg-danger me-3" @click="deleteTempImage">
                                -
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                        <div class="col-6 position-relative mb-3" v-for="(pic,key) in tempProduct.imagesUrl" :key="'key' + key ">
                            <img :src="pic" :alt="'imagesUrl' + key" class="object-fit-cover w-100">
                            <span class="position-absolute top-0 start-75 translate-middle badge rounded-circle bg-danger me-3" @click="deleteTempImage">
                                -
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="mb-3 d-flex align-items-center">
                        <label for="title" class="form-label">Title：</label>
                        <div class="w-100 d-flex flex-column">
                            <v-field type="text" id="title" class="form-control" :class="{'is-invalid': errors.Title}" name="Title" v-model="tempProduct.title" rules="required"></v-field>
                            <error-message class="invalid-feedback" name="Title"></error-message>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3 d-flex align-items-center">
                                <label for="category" class="form-label">Category：</label>
                                <div class="w-100 d-flex flex-column">
                                    <v-field type="text" id="category" class="form-control" :class="{'is-invalid': errors.Category}" name="Category" v-model="tempProduct.category" rules="required"></v-field>
                                    <error-message class="invalid-feedback" name="Category"></error-message>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3 d-flex align-items-center">
                                <label for="unit" class="form-label">Unit：</label>
                                <div class="w-100 d-flex flex-column">
                                    <v-field type="text" id="unit" class="form-control" :class="{'is-invalid': errors.Unit}" name="Unit" v-model="tempProduct.unit" rules="required"></v-field>
                                    <error-message class="invalid-feedback" name="Unit"></error-message>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3 d-flex align-items-center">
                                <label for="origin_price" class="form-label">Origin_price：</label>
                                <div class="w-100 d-flex flex-column">
                                    <v-field type="number" id="origin_price" class="form-control" :class="{'is-invalid': errors.Origin_price}" name="Origin_price" v-model.number="tempProduct.origin_price" min="0" rules="required"></v-field>
                                    <error-message class="invalid-feedback" name="Origin_price"></error-message>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3 d-flex align-items-center">
                                <label for="price" class="form-label">Price：</label>
                                <div class="w-100 d-flex flex-column">
                                    <v-field type="number" id="price" class="form-control" :class="{'is-invalid': errors.Price}" name="Price" v-model.number="tempProduct.price" min="0" rules="required"></v-field>
                                    <error-message class="invalid-feedback" name="Price"></error-message>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <label for="content" class="form-label">Content：</label>
                        <div class="w-100 d-flex flex-column">
                            <v-field type="text" id="content" class="form-control" :class="{'is-invalid': errors.Content}" name="Content" v-model="tempProduct.content" rules="required"></v-field>
                            <error-message class="invalid-feedback" name="Content"></error-message>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description：</label>
                        <div class="w-100">
                            <v-field name="Description" rules="required" v-model="tempProduct.description">
                                <textarea name="Description" class="w-100" :class="{'is-invalid': errors.Description}" id="description" cols="30" rows="3" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                                <error-message name="Description" class="invalid-feedback"></error-message>
                            </v-field>
                        </div>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <input type="checkbox" id="is_enabled" class="form-check-input me-2" :checked="tempProduct.is_enabled" v-model="tempProduct.is_enabled">
                        <label for="is_enabled" class="form-check-label">啟用</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="hideModal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
        </v-form>
    </div>
    </div>
</template>

<script>
const apiUrl=import.meta.env.VITE_API;
const apiPath=import.meta.env.VITE_PATH;

import MixinModal from '../assets/js/mixins/mixinModal.js';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

defineRule('required', required);

configure({
    validateOnInput: true,
    generateMessage: localize({
        zh_TW,
    }),
});
setLocale('zh_TW');

export default {
    data(){
        return {
            tempProduct: {},
            imageUrl: '',
            disabled: false,
            fileData: '',
        }
    },
    mixins: [MixinModal],
    props: {
        productModal: {
            typeof: Object,
            default() {return {}; }
        }
    },
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage,
    },
    watch: {
        imageUrl(){
            this.imageUrl? this.disabled= true : this.disabled= false;
        },
        productModal(){
            this.tempProduct = {...this.productModal};
        },
    },
    methods: {
        throttle(callback){
            let setTime,callbackArg;
            return (...arg) => {
                callbackArg = arg;
                if(setTime){
                    return;
                }
                callback(callbackArg);
                callbackArg = null;
                setTime = setTimeout(() => {
                    setTime = null;
                    if(callbackArg){
                        callback(callbackArg);
                        callbackArg = null;
                    }
                }, 1000);
            }
        },
        onSubmit(){
            if(!this.tempProduct.imageUrl){
                return;
            }
            this.disabled? this.tempProduct.is_enabled = 0 : this.tempProduct.is_enabled = 1;
            if(this.tempProduct.id){
                this.putProduct({data: this.tempProduct});
            }else{
                this.postProduct({data: this.tempProduct});
            }
        },
        async postProduct(obj){
            try {
                this.$emit('emit-toggleLoading');
                const result= (await this.axios.post(`${apiUrl}v2/api/${apiPath}/admin/product`,obj)).data;
                
                this.$emit('emit-toggleLoading');
                if(result.success){
                    const sweetConfig={
                        icon: 'success',
                        title: result.message,
                        timer: 1500
                    }
                    this.$swal(sweetConfig);
                    this.hideModal();
                    this.$emit('emit-getProducts');
                }else{
                    const sweetConfig={
                        icon: 'error',
                        title: result.message,
                    }
                    this.$swal(sweetConfig);
                }
            } catch (err) {
                console.log(err.response);
            }
        },
        async putProduct(obj){
            try {
                this.$emit('emit-toggleLoading');
                const result = (await this.axios.put(`${apiUrl}/v2/api/${apiPath}/admin/product/${this.tempProduct.id}`,obj)).data;
                this.$emit('emit-toggleLoading');
                if(result.success){
                    const sweetConfig={
                        icon: 'success',
                        title: result.message,
                        timer: 1500
                    }
                    this.$swal(sweetConfig);
                    this.hideModal();
                    this.tempProduct = {};
                    this.$emit('emit-getProducts');
                }else{
                    const sweetConfig={
                        icon: 'error',
                        title: result.message,
                    }
                    this.$swal(sweetConfig);
                }
            } catch (err) {
                console.log(err);
            }
        },
        async loadFile(e){
            try{
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append('file-to-upload',file);

                const result = (await this.axios.post(`${apiUrl}/v2/api/${apiPath}/admin/upload`,formData));
                this.imageUrl = result.data.imageUrl;
            }catch(err){
                console.log(err.response);
            }
        },
        deleteImageUrl(){
            this.imageUrl = '';
            this.fileData = '';
        },
        deleteTempImage(e){
            if(e.target.previousElementSibling.alt.includes('imageUrl')){
                // console.log(e.target.previousElementSibling.alt.includes('imageUrl'));
                this.tempProduct.imageUrl = '';
            }else{
                const index = Number(e.target.previousElementSibling.alt.split('imagesUrl')[1]);
                // console.log(index);
                this.tempProduct.imagesUrl.splice(index,1);
            }
        },
        addProductImage(){
            if(!this.imageUrl){
                return;
            }
            this.tempProduct.imageUrl? this.tempProduct.imagesUrl.push(this.imageUrl) : this.tempProduct.imageUrl = this.imageUrl;
            this.imageUrl = '';
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss">
textarea{
    resize: none;
}
.badge{
    cursor: pointer;
    &:active{
        background-color: #a80c0c !important;
    }
}
</style>