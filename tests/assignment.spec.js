//IT23204652

import { test, expect } from '@playwright/test';

const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';

test.describe('Assignment 1 - Suite (Your Sentences)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // POSITIVE TEST CASES (24 Scenarios)
  

  test('Pos_01', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama adha gedhara innavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම අද ගෙදර ඉන්නවා.');
  });

  test('Pos_02', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata paan oonee.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට පාන් ඕනේ.');
  });

  test('Pos_03', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('suba dhavasak!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('සුබ දවසක්!');
  });

  test('Pos_04', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaa hariyata innavadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයා හරියට ඉන්නවද?');
  });

  test('Pos_05', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('poddak inna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('පොඩ්ඩක් ඉන්න.');
  });

  test('Pos_06', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama eeka karanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ඒක කරනවා.');
  });

  test('Pos_07', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama eeka karanne nae.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ඒක කරන්නේ නැ.');
  });

  test('Pos_08', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api dinner kanna gihin passe walk ekak yamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි dinner කන්න ගිහින් පස්සෙ walk එකක් යමු.');
  });

  test('Pos_09', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaa enavani dhaenma yamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයා එනවනි දැන්ම යමු.');
  });

  test('Pos_10', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama iiyee bank ekata giyaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ඊයේ bank එකට ගියා');
  });

  test('Pos_11', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api heta aluth plan ekak karamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි හෙට අලුත් plan එකක් කරමු.');
  });

  test('Pos_12', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaa kohomadha dhaen?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයා කොහොමද දැන්?');
  });

  test('Pos_13', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api okkoma ready.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි ඔක්කොම ready.');
  });

  test('Pos_14', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karunaakarala mage file eka check karanna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('කරුනාකරල mage file එක check කරන්න.');
  });

  test('Pos_15', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ado eeka dhenna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ado ඒක දෙන්න.');
  });

  test('Pos_16', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('hari hari, mata therenavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('හරි හරි, මට තෙරෙනවා.');
  });

  test('Pos_17', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata paan oonee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට පාන් ඕනේ');
  });

  test('Pos_18', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('adha Teams meeting eka 4.15 PM.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අද Teams meeting එක 4.15 PM.');
  });

  test('Pos_19', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api Colombo yanna kalin fuel ganna oonee.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි Colombo යන්න කලින් fuel ගන්න ඕනේ.');
  });

  test('Pos_20', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata OTP eka SMS eken enavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට OTP එක SMS එකෙන් එනවා.');
  });

  test('Pos_21', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('milk 500ml eka Rs. 320.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('milk 500ml එක Rs. 320.');
  });

  test('Pos_22', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eeka hondha dha!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඒක හොන්ද ද!');
  });

  test('Pos_23', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama adha office yanne.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම අද office යන්නෙ.');
  });

  test('Pos_24', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill(`adha maath ekka poddak kathaa karanna puluvandha? mama dawas gananakma vaeda wadi nisaa thama nidhaganna amathaka wenavaa. ehenam api heta udhaasana 7.00ta call ekak danna. mama notes tikak hadala thiyannam, oyath poddak ready wenna.`);
    await page.waitForTimeout(4000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText(`අද මාත් එක්ක පොඩ්ඩක් කතා කරන්න පුලුවන්ද? මම ඩwඅස් ගනනක්ම වැඩ wadi නිසා තම නිදගන්න අමතක wඑනවා. එහෙනම් අපි හෙට උදාසන 7.00ට call එකක් ඩන්න. මම notes ටිකක් හඩල තියන්නම්, ඔයත් පොඩ්ඩක් ready wඑන්න.`);
  });

  

  // NEGATIVE TEST CASES (24 Scenarios)



 test('Neg_01', async ({ page }) => {
  const inputBox = page.locator('textarea').first();
  await inputBox.fill('mama gedhr yanva');
  await page.waitForTimeout(3000);
  const outputBox = page.locator(OUTPUT_SELECTOR);
  await expect(outputBox).not.toHaveText('මම ගෙදර යනව.');
});



  test('Neg_02', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata pan oni');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('මට පානී ඕනේ!!.');
  });

  test('Neg_03', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaa enavada');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('ඔය එනවද?');
  });

  test('Neg_04', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama adh office yanne naee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('මම අද office යන්නෙ න.');
  });

  test('Neg_05', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eeka hari??!!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('එක හරි??!');
  });

  test('Neg_06', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ID eka, NIC eka, OTP eka okkoma enter karanna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('ID එක NIC එක OTP එක ඔක්කොම එන්ටර් කරන්න.');
  });

  test('Neg_07', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama gedhara yanavaa oyaa passe ennaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('මම ගෙදර යනව ඔයා පස්සේ එන්න');
  });

  test('Neg_08', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata beyaa hithenavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('මට බය හිතෙනව.');
  });

  test('Neg_09', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api Clombo yanna hadnava');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText('අපි Colombo යන්න හදනවා.');
  });

  test('Neg_10', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill(`mama adha office yanna kalin documents tika print karanna oonee... habai printer eka wada karanne nae, ink nivila! ehenam plan eka change karala, mama evening 6.30ta shop ekata gihin ink gannam. oyath if possible enna, ithin man danne nae kohomada karanne.`);
    await page.waitForTimeout(4000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toHaveText(`මම අද office යන්න කලින් documents ටික print කරන්න ඕනේ... හැබයි printer එක වැඩ කරන්නෙ නෑ ink නිවීලා! එහෙනම් plan එක change කරල මම evening 6.30ට shop එකට ගිහිං ink ගන්නම් ඔයාත්ifpossible එන්න, ඉතින් මන් දන්නේ නෑ කොහොමද කරන්නෙ.`);
  });

});


//UI TEST SCENARIO (Real-time Interaction)


  test('UI_01: Verify Real-time Translation Update', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.pressSequentially('mama gedhara yanavaa.', { delay: 100 });
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toBeEmpty();
    await expect(outputBox).toContainText('මම ගෙදර යනවා.');
    await inputBox.clear();
    await page.waitForTimeout(1000);
    await expect(outputBox).toBeEmpty();
  });
