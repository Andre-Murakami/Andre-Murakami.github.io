new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1,
                name: 'Tonkatsu Bull Dog 300ml',
                description: 'Molho Para Empanados, Milanesas.',
                price: 'R$ 26,90',
                image: 'images/tonkatsu.jpg',
                category: 'Molhos'
            },
            {
                id: 2,
                name: 'Tofu 500g',
                description: 'Queijo de soja.',
                price: 'R$ 15,90',
                image: 'images/tofu500.jpg',
                category: 'Tofu'
            },
            {
                id: 3,
                name: 'Maionese 450g Kewpie',
                description: 'Eleita a melhor maionese do mundo.',
                price: 'R$ 55,90',
                image: 'images/kewpie.jpg',
                category: 'Molhos'
            },
            {
                id: 4,
                name: 'Tofu 700g',
                description: 'Tamanho econômico.',
                price: 'R$ 20,90',
                image: 'images/tofu700.jpg',
                category: 'Tofu'
            },
            {
                id: 5,
                name: 'Shoyu Kikoman 1L',
                description: 'Molho de Soja Koikuti 1L Kikkoman.',
                price: 'R$ 54,80',
                image: 'images/kikoman.jpg',
                category: 'Molhos'
            },
            {
                id: 6,
                name: 'Age tofu 200g',
                description: 'Tofu frito. ',
                price: 'R$ 18,90',
                image: 'images/age.jpg',
                category: 'Tofu'
            }
        ],

        ofertas1: [
            {
                id: 1,
                name: 'MARUKOME MISO KUN KOSHI 650g',
                description: 'Pasta de soja suave, clara, com peixe bonito.',
                price: 'R$ 24,90',
                image: 'images/miso.jpg',
                category: 'Temperos'
            },
            {
                id: 2,
                name: 'Moti com Recheio de Doce Custard 8p 200g',
                description: 'Doce de Farinha de Arroz.',
                price: 'R$ 25,90',
                image: 'images/moti.jpg',
                category: 'Doces'
            },
            {
                id: 3,
                name: 'Chá Verde Ban Cha 200g',
                description: 'Yamamotoyama. Rico em polifenóis.',
                price: 'R$ 17,00',
                image: 'images/cha-yamamato.jpg',
                category: 'Chás'
            },
            {
                id: 4,
                name: 'Sunaoshi tsuki soba 230g',
                description: 'Macarrão para soba com tempero pronto.',
                price: 'R$ 19,20',
                image: 'images/soba.jpg',
                category: 'Massas'
            },
            {
                id: 5,
                name: 'Kit Sushi',
                description: 'Arroz de sushi, nori, vinagre de arroz, wasabi, sake mirin',
                price: 'R$ 70,00',
                image: 'images/kit.jpg',
                category: 'Kits'
            },
            {
                id: 6,
                name: 'Sake Yamada Honjozoshu 720ml',
                description: 'Bebida Alcoólica de Arroz Fermentado Sake Yamada Honjozoshu 720ml Hakushika Japão',
                price: 'R$ 218,60',
                image: 'images/sake.jpg',
                category: ['Sakes']
            }
        ],

        tofu: [
            {
                id: 1,
                name: 'Tofu 500g',
                description: 'Do bom',
                price: 'R$ 15,90',
                image: 'images/tofu500.jpg',
                category: 'Tofu'
            }
        ],

        cart: [],
        search: '',
        selectedCategory: '',
        categories: ['Tofu','Chás', 'Doces', 'Kits', 'Massas', 'Molhos', 'Temperos'],
        newsletterName: '',
        newsletterEmail: ''
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                return (
                    (!this.selectedCategory || product.category === this.selectedCategory) &&
                    (!this.search || product.name.toLowerCase().includes(this.search.toLowerCase()))
                );
            });
        },
        filteredOfertas() {
            return this.ofertas1.filter(oferta => {
              return (
                (!this.selectedCategory || oferta.category === this.selectedCategory) &&
                (!this.search || oferta.name.toLowerCase().includes(this.search.toLowerCase()))
              );
            });
          },
        cartTotal() {
            return this.cart.reduce((total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.')), 0).toFixed(2);
        }
    },
    methods: {
        addToCart(product) {
            this.cart.push(product);
            this.saveCart();
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
            this.saveCart();
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        loadCart() {
            const cart = localStorage.getItem('cart');
            if (cart) {
                this.cart = JSON.parse(cart);
            }
        },
        subscribeNewsletter() {
            if (this.newsletterName && this.newsletterEmail) {
                alert(`Obrigado por se inscrever, ${this.newsletterName}!`);
                // lógica para enviar os dados para um servidor
                this.newsletterName = '';
                this.newsletterEmail = '';
            } else {
                alert('Por favor, preencha seu nome e e-mail.');
            }
        }
    },
    mounted() {
        this.loadCart();
    }
});
