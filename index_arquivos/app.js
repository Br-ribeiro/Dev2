
(function(){

	var gems = [
	{
		name: "esmeralda",
		price:25000,
		description:'Predra top pra carai',
		images:[
			{
			full:'esmeralda.png',
			thumb:'esmeralda.png'
			},
			{
				full:'esmeralda2.png',
				thumb:'esmeralda2.png'
			}
		],
		canPurchase: true
	},
	{
		name: "ruby",
		price:30000,
		description:'Pedra de rico mais top',
		images:[
			{
			full:'rubi.png',
			thumb:'rubi.png'
			},
			{
				full:'rubi2.png',
				thumb:'rubi2.png'
			}
		],
		canPurchase: true
	}
];

	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.Products = gems;
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

})();



/*(function(){
	var gems = [
		{
			name:"diamente",
			price:"1000.00",
			description:"pedra foda",
			canPurchase:false,
			soldOut:true,
		},	{
			name:"esmeralda",
			price:"5000000.00",
			description:"pedra fodas",
			canPurchase:true,
			soldOut:false,
		},
	]
	var app = angular.module('store',[]);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(valueTab){
			this.tab = valueTab;
		};

		this.isSelected = function(valueTab){
			return this.tab === valueTab;
		};
	});

})();
*/
