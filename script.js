document.addEventListener('DOMContentLoaded', () => {
  const automationProgress = document.createElement('div');
  automationProgress.style.width = '100%';
  automationProgress.style.height = '30px';
  automationProgress.style.backgroundColor = '#ddd';
  automationProgress.style.position = 'fixed';
  automationProgress.style.top = '0';
  document.body.appendChild(automationProgress);

  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      automationProgress.innerHTML = 'Automated Workflow Completed!';
    } else {
      progress += 5;
      automationProgress.style.width = progress + '%';
      automationProgress.innerHTML = `Automation Progress: ${progress}%`;
    }
  }, 500);
});
