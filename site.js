const copyButton = document.querySelector('#copy-email');
const status = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('Lawyerrainchan@gmail.com');
    status.textContent = '邮箱已复制：Lawyerrainchan@gmail.com';
    copyButton.textContent = '已复制 ✓';
    window.setTimeout(() => { copyButton.textContent = '复制邮箱 ⧉'; }, 2500);
  } catch {
    status.textContent = '请复制邮箱：Lawyerrainchan@gmail.com';
  }
});
