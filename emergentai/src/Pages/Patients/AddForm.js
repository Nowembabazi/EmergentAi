import React from 'react';

const AddForm = () => {
  return (
    <div className="flex justify-center p-6">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Add Patient</h2>

        <div className="grid grid-cols-2 gap-6">
          
          <div>
            <h3 className="font-semibold mb-2">Medical History</h3>

            <label className="block mb-2">What symptoms have you been facing? (Select all that apply)</label>
            <div className="flex flex-col mb-4 space-y-2">
              <label>
                <input type="checkbox" className="mr-2" /> A bad cough that lasts 3 weeks or longer (COUGH)
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Pain in the chest (CHEST PAIN)
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Coughing up blood or sputum from deep inside the lungs
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Weakness or fatigue
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Weight loss
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> No appetite
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Chills
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Fever
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Sweating at night
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Spent time with someone who has active TB disease
              </label>
            </div>

            {/* Additional questions with radio buttons */}
            {['Have you spent time with someone who has active TB disease?', 'Have you ever had a TB skin test?', 'Have you been coughing for 2 weeks or more?', 'Have you had persistent fevers for 2 weeks or more?', 'Have you had noticeable weight loss (more than 3kg)?', 'Have you had excessive night sweats for 3 weeks or more?', 'Has the child had contact with a person with Pulmonary Tuberculosis or chronic cough?'].map((question, index) => (
              <div className="mb-4" key={index}>
                <label className="block mb-1">{question}</label>
                <label className="mr-4">
                  <input type="radio" name={`question${index}`} value="yes" className="mr-1" /> Yes
                </label>
                <label>
                  <input type="radio" name={`question${index}`} value="no" className="mr-1" /> No
                </label>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {['What medications have you used before?(drugs or injections)', 'When did you start experiencing the symptoms?', 'Have you had a body transplant before?', 'Do you have diabetes?', 'Have you been diagnosed with neck or head cancer before?', 'What is your body weight?'].map((question, index) => (
              <div className="mb-4" key={index}>
                <label className="block mb-1">{question}</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            ))}

            <div className="mb-4">
              <label className="block mb-1">Have you ever had a TB blood test?</label>
              <label className="mr-4">
                <input type="radio" name="tb_blood_test" value="yes" className="mr-1" /> Yes
              </label>
              <label>
                <input type="radio" name="tb_blood_test" value="no" className="mr-1" /> No
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Allergies</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
