describe('Primeiro teste', () => {
    it('Acessar o menu forms', async () => {
        //const selector = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        //const validaBotao = await $(`android = ${selector}`)
        const button = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]')
        

        await $('~Forms').click()
        await $('~text-input').setValue('Prencher o campo')
        expect (await $('~text-input')).toBeDisplayed()

        await $('~switch').click()

        await $('~Dropdown').click()
        await button.click()

        await driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: '~button-Active' });

        await $('~button-Active').click()
    });
});

