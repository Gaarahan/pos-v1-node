const main = require('../main/main');/*导入main.js文件*/
              
describe('pos', function () {
    var inputs;

    beforeEach(function () {
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });/*在每一个测试用例开始前，重置参数*/

    /*开始一个测试，it 有两个参数(测试用例名，测试函数)*/
    it('should print correct text', function () {

        spyOn(console, 'log');/*声明一个spy监测()，该语句为console对象的方法log生命了一个监测*/

        printInventory(inputs);/*调用需完善的功能函数*/

        var expectText =　/*被期望的结果*/
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        /*测试expectText是否有做为console.log()的参数*/
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
