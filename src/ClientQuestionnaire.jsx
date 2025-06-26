import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientQuestionnaire() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bname: '',
    email: '',
    telephone: '',
    hasWebsite: '',
    url: '',
    projectGoals: '',
    targetAudience: '',
    actions: '',
    brandMaterials: '',
    brandHelp: '',
    inspiration: '',
    preferences: '',
    pages: [],
    otherPages: '',
    contentReady: '',
    imageSource: '',
    features: [],
    contentUpdates: '',
    seoOptimization: '',
    trackVisitors: '',
    keywords: '',
    budget: '',
    launchDate: '',
    additionalComments: '',
    maintenance: '',
    training: '',
    legal: '',
    designerExperience: '',
    successDefinition: '',
    finalComments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (formData[name]?.includes(value)) {
        setFormData((prev) => ({
          ...prev,
          [name]: prev[name].filter((v) => v !== value),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: [...(prev[name] || []), value],
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleWebsiteChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      hasWebsite: value,
      url: value === 'no' ? '' : prev.url,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = {
        formData,
    postedAt: new Date().toISOString()
}
    // Here you can handle the form submission, e.g., send it to a server   
    console.log('Submitted Form Data:', formData);
    // You can send the form data to a backend service here
    fetch("http://localhost:8000/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(client),
        })
            .then(() => {
                navigate("/");
            });
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-2xl text-center font-bold mb-4 text-pink-300">Mawutech Solutions - Web Design Client Questionnaire Form</h1>
        <hr />

        <section>
          <h2 className="text-blue-500 font-semibold">1. General Information</h2>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="block border p-2 my-2 w-full" />
          <input type="text" name="bname" placeholder="Business/Organization Name" value={formData.bname} onChange={handleChange} required className="block border p-2 my-2 w-full" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="block border p-2 my-2 w-full" />
          <input type="tel" name="telephone" placeholder="Telephone" value={formData.telephone} onChange={handleChange} required className="block border p-2 my-2 w-full" />

          <label>Do you currently have a website?</label>
          <div className="flex gap-4 my-2">
            <label><input type="radio" name="hasWebsite" value="Yes" checked={formData.hasWebsite === 'Yes'} onChange={() => handleWebsiteChange('Yes')} /> Yes</label>
            <label><input type="radio" name="hasWebsite" value="no" checked={formData.hasWebsite === 'no'} onChange={() => handleWebsiteChange('no')} /> No</label>
          </div>
          {formData.hasWebsite === 'Yes' && (
            <input type="url" name="url" placeholder="Website URL" value={formData.url} onChange={handleChange} required className="block border p-2 my-2 w-full" />
          )}
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">2. Project Goals</h2>
          <textarea name="projectGoals" placeholder="Main purpose of your website" value={formData.projectGoals} onChange={handleChange} className="block border p-2 my-2 w-full" />
          <input type="text" name="targetAudience" placeholder="Your target audience" value={formData.targetAudience} onChange={handleChange} className="block border p-2 my-2 w-full" />
          <textarea name="actions" placeholder="Desired user actions" value={formData.actions} onChange={handleChange} className="block border p-2 my-2 w-full" />
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">3. Branding & Design</h2>
          <label>Do you have brand materials?</label>
          <div className="flex gap-4 my-2">
            <label><input type="radio" name="brandMaterials" value="Yes" checked={formData.brandMaterials === 'Yes'} onChange={handleChange} /> Yes (attach below)</label>
            <label><input type="radio" name="brandMaterials" value="no" checked={formData.brandMaterials === 'no'} onChange={handleChange} /> No</label>
          </div>
          <input type="file" accept="image/*" className="block my-2" />
          {formData.brandMaterials === 'no' && (
            <input type="text" name="brandHelp" placeholder="Do you need help creating them?" value={formData.brandHelp} onChange={handleChange} className="block border p-2 my-2 w-full" />
          )}
          <textarea name="inspiration" placeholder="Websites you like & why" value={formData.inspiration} onChange={handleChange} className="block border p-2 my-2 w-full" />
          <textarea name="preferences" placeholder="Preferred colors, styles, fonts" value={formData.preferences} onChange={handleChange} className="block border p-2 my-2 w-full" />
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">4. Content & Pages</h2>
          <label>Which pages do you need?</label>
          <div className="grid grid-cols-2 gap-2 my-2">
            {["Home", "About", "Services", "Blog", "Gallery", "Contact"].map((page) => (
              <label key={page}><input type="checkbox" name="pages" value={page} onChange={handleChange} checked={formData.pages.includes(page)} /> {page}</label>
            ))}
          </div>
          <textarea name="otherPages" placeholder="Other pages" value={formData.otherPages} onChange={handleChange} className="block border p-2 my-2 w-full" />

          <label>Do you have content (text/images) ready?</label>
          <div className="flex gap-4 my-2">
            <label><input type="radio" name="contentReady" value="Yes" checked={formData.contentReady === 'Yes'} onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="contentReady" value="No" checked={formData.contentReady === 'No'} onChange={handleChange} /> No</label>
          </div>

          <label>Image source:</label>
          <div className="flex gap-4 my-2">
            {["I will provide images", "Use stock images", "Combination"].map((source) => (
              <label key={source}><input type="radio" name="imageSource" value={source} onChange={handleChange} checked={formData.imageSource === source} /> {source}</label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">5. Features & Functionality</h2>
          <label>Select features you need:</label>
          <div className="grid grid-cols-2 gap-2 my-2">
            {["Contact Form", "Blog", "E-commerce", "Booking System", "Newsletter signup", "Social media integration", "User Login/Register", "Live Chat"].map((feature) => (
              <label key={feature}><input type="checkbox" name="features" value={feature} onChange={handleChange} checked={formData.features.includes(feature)} /> {feature}</label>
            ))}
          </div>
          <textarea name="additionalComments" placeholder="Other features or comments" value={formData.additionalComments} onChange={handleChange} className="block border p-2 my-2 w-full" />

          <label>Will you manage content updates yourself?</label>
          <div className="flex gap-4 my-2">
            {["Yes", "No", "Not sure"].map((opt) => (
              <label key={opt}><input type="radio" name="contentUpdates" value={opt} onChange={handleChange} checked={formData.contentUpdates === opt} /> {opt}</label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">6. SEO & Analytics</h2>
          <label>Need SEO optimization?</label>
          <div className="flex gap-4 my-2">
            {["Yes", "No", "Not sure"].map((opt) => (
              <label key={opt}><input type="radio" name="seoOptimization" value={opt} onChange={handleChange} checked={formData.seoOptimization === opt} /> {opt}</label>
            ))}
          </div>

          <label>Track visitors?</label>
          <div className="flex gap-4 my-2">
            <label><input type="radio" name="trackVisitors" value="Yes" onChange={handleChange} checked={formData.trackVisitors === 'Yes'} /> Yes</label>
            <label><input type="radio" name="trackVisitors" value="No" onChange={handleChange} checked={formData.trackVisitors === 'No'} /> No</label>
          </div>

          <textarea name="keywords" placeholder="Keywords to target" value={formData.keywords} onChange={handleChange} className="block border p-2 my-2 w-full" />
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">7. Budget & Timeline</h2>
          <input type="text" name="budget" placeholder="Estimated budget" value={formData.budget} onChange={handleChange} className="block border p-2 my-2 w-full" />
          <input type="date" name="launchDate" value={formData.launchDate} onChange={handleChange} className="block border p-2 my-2 w-full" />
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">8. Maintenance & Support</h2>
          <label>Need ongoing maintenance?</label>
          <div className="flex gap-4 my-2">
            {["Yes", "No", "Not Sure"].map((opt) => (
              <label key={opt}><input type="radio" name="maintenance" value={opt} onChange={handleChange} checked={formData.maintenance === opt} /> {opt}</label>
            ))}
          </div>

          <label>Would you like training?</label>
          <div className="flex gap-4 my-2">
            <label><input type="radio" name="training" value="Yes" onChange={handleChange} checked={formData.training === 'Yes'} /> Yes</label>
            <label><input type="radio" name="training" value="No" onChange={handleChange} checked={formData.training === 'No'} /> No</label>
          </div>
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">9. Legal</h2>
          <label>Do you have privacy policy & terms?</label>
          <div className="flex gap-4 my-2">
            <label><input type="radio" name="legal" value="Yes" onChange={handleChange} checked={formData.legal === 'Yes'} /> Yes</label>
            <label><input type="radio" name="legal" value="No" onChange={handleChange} checked={formData.legal === 'No'} /> No</label>
          </div>
        </section>

        <section>
          <h2 className="text-blue-500 font-semibold">10. Final Notes</h2>
          <textarea name="designerExperience" placeholder="Have you worked with a designer?" value={formData.designerExperience} onChange={handleChange} className="block border p-2 my-2 w-full" />
          <textarea name="successDefinition" placeholder="What does a successful website mean to you?" value={formData.successDefinition} onChange={handleChange} className="block border p-2 my-2 w-full" />
          <textarea name="finalComments" placeholder="Other comments or requirements" value={formData.finalComments} onChange={handleChange} className="block border p-2 my-2 w-full" />
        </section>

        <button type="submit" className="bg-blue-500 text-white p-3 rounded shadow hover:bg-green-400 hover:text-red-600">Submit</button>
      </form>
    </div>
  );
}

export default ClientQuestionnaire;
