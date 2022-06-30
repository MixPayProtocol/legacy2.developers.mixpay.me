import { test } from '@japa/runner'
import Guides from '../../content/guides/menu.json'
import API from '../../content/api/menu.json'

// 测试所有 Guides 页面
for (const category of Guides[0].categories) {
  for (const doc of category.docs) {

    const url = '/guides/' + doc.permalink
    test('display ' + url + ' page', async ({ client }) => {
      const response = await client.get(url)
      console.log(response);
      response.assertStatus(200)
      response.assertTextIncludes('Payment for Web3 - MixPay')
    })
  }
}

// 测试所有 API 页面
for (const category of API[0].categories) {
  for (const doc of category.docs) {

    const url = '/api/' + doc.permalink
    test('display ' + url + ' page', async ({ client }) => {
      const response = await client.get(url)
      response.assertStatus(200)
      response.assertTextIncludes('Payment for Web3 - MixPay')
    })
  }
}
