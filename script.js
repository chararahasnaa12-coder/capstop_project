// Select the dropdown for type of organization (الجهة التابعة)
const roleSelect = document.querySelector('select');
const form = document.querySelector('form');

// Add event listener for role change
if (roleSelect) {
  roleSelect.addEventListener('change', () => {
    // Remove any old extra fields
    const oldExtra = document.getElementById('extraFields');
    if (oldExtra) oldExtra.remove();

    // Create a container for new fields
    const extraDiv = document.createElement('div');
    extraDiv.id = 'extraFields';

    // Depending on the selected value, add fields
    if (roleSelect.value === 'school') {
      extraDiv.innerHTML = `
        <div class="form-group">
          <label>اسم المدرسة</label>
          <input type="text" placeholder="أدخل اسم المدرسة" required>
        </div>
        <div class="form-group">
          <label>المنطقة</label>
          <input type="text" placeholder="المنطقة أو المدينة" required>
        </div>
      `;
    } 
    else if (roleSelect.value === 'scout') {
      extraDiv.innerHTML = `
        <div class="form-group">
          <label>اسم الفوج الكشفي</label>
          <input type="text" placeholder="أدخل اسم الفوج" required>
        </div>
        <div class="form-group">
          <label>القائد المسؤول</label>
          <input type="text" placeholder="اسم القائد" required>
        </div>
      `;
    } 
    else if (roleSelect.value === 'association') {
      extraDiv.innerHTML = `
        <div class="form-group">
          <label>اسم الجمعية</label>
          <input type="text" placeholder="أدخل اسم الجمعية" required>
        </div>
        <div class="form-group">
          <label>مجال النشاط</label>
          <input type="text" placeholder="ثقافي، اجتماعي، رياضي..." required>
        </div>
      `;
    }

    // Add new fields before the submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    form.insertBefore(extraDiv, submitBtn);
  });
}
