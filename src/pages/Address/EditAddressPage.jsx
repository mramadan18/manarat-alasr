import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";

const EditAddressPage = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <TitlePage title="تعديل عنوان" />

        <form className="add-address" noValidate>
          <div className="input-container position-relative mb-2">
            <input
              type="text"
              placeholder="الاسم"
              className="form-control"
              autoComplete="off"
              required
            />
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="input-container position-relative mb-2">
            <input
              type="email"
              placeholder="تحديد الموقع"
              autoComplete="off"
              className="form-control"
              required
            />
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="input-container position-relative mb-2">
            <input
              type="text"
              placeholder="وصف العنوان"
              required
              autoComplete="off"
              className="form-control"
            />
          </div>

          <div className="input-container position-relative mb-2">
            <input
              type="text"
              placeholder="رقم الجوال"
              required
              className="form-control"
            />
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="input-container position-relative mb-2">
            <select type="text" required className="form-control">
              <option defaultChecked>--- الرجاء اختيار البلد ---</option>
              <option>السعودية</option>
            </select>
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="input-container position-relative mb-2">
            <select type="text" required className="form-control">
              <option defaultChecked>--- الرجاء اختيار المحافظة ---</option>
              <option>تبوك</option>
              <option>الرياض</option>
              <option>جدة</option>
            </select>
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="pull-right text-end mt-3">
            <label className="control-label">العنوان الافتراضي</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                نعم
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                لا
              </label>
            </div>
          </div>
          <button className="btn bg-main w-100 mt-4 rounded-5" type="submit">
            إضافة العنوان
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditAddressPage;
