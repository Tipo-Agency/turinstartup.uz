import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CONTACT_INFO, GOOGLE_SHEETS_CONFIG } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { FormData as FormDataType } from '../types';
import { useLanguage } from '../LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormDataType>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idea: '',
    stage: 'idea'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToGoogleSheets = async (data: FormDataType) => {
    if (!GOOGLE_SHEETS_CONFIG.scriptUrl) {
      throw new Error("Google Sheets Script URL is missing in constants.tsx");
    }

    // We use FormData to avoid CORS preflight issues common with JSON in Google Apps Script
    const formPayload = new FormData();
    formPayload.append('firstName', data.firstName);
    formPayload.append('lastName', data.lastName);
    formPayload.append('email', data.email);
    formPayload.append('phone', data.phone);
    formPayload.append('idea', data.idea);
    formPayload.append('stage', data.stage);

    const response = await fetch(GOOGLE_SHEETS_CONFIG.scriptUrl, {
      method: 'POST',
      body: formPayload,
      // mode: 'no-cors' is often used with GAS, but it prevents reading the response status.
      // However, a correctly set up GAS Web App (Access: Anyone) usually handles simple POSTs fine.
    });

    if (!response.ok) {
        // In 'no-cors' mode (if we had to use it), we wouldn't see this error.
        // If standard fetch fails, it's usually a network error or 404/500.
        throw new Error('Failed to connect to Google Sheets');
    }
    
    // Note: With Google Apps Script, we might get an opaque response depending on CORS setup,
    // but usually if it doesn't throw, it worked.
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      await sendToGoogleSheets(formData);
      setStatus('success');
      
      // Reset form after 5 seconds
      setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            idea: '',
            stage: 'idea'
          });
          setStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong');
    }
  };

  return (
    <Section id="apply" className="bg-gray-50 border-t border-gray-200">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Contact Info */}
        <div id="contact" className="lg:sticky lg:top-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.form.title}</h2>
          <p className="text-xl text-gray-500 mb-12 font-light">
            {t.form.subtitle}
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-brand shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-medium text-gray-900 hover:text-brand transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-brand shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t.form.phone}</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-medium text-gray-900 hover:text-brand transition-colors">{CONTACT_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-brand shadow-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t.form.contactLabels.address}</p>
                <p className="text-xl font-medium text-gray-900 leading-snug">{t.form.contactLabels.university}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            {status === 'success' ? (
                <div className="h-96 flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-green-200 shadow-lg">
                        <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.form.success}</h3>
                    <p className="text-gray-500 max-w-xs">Our team will review your application and contact you shortly.</p>
                </div>
            ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">{t.form.firstName}</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">{t.form.lastName}</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">{t.form.phone}</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">{t.form.stage}</label>
              <div className="relative">
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all outline-none appearance-none"
                >
                  <option value="idea">{t.form.stages.idea}</option>
                  <option value="team">{t.form.stages.team}</option>
                  <option value="prototype">{t.form.stages.prototype}</option>
                  <option value="sales">{t.form.stages.sales}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">{t.form.idea}</label>
              <textarea
                name="idea"
                required
                rows={4}
                value={formData.idea}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all outline-none resize-none"
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>
                   Error: {errorMessage === 'Google Sheets Script URL is missing in constants.tsx' ? 'Configuration missing: Add Script URL in constants.tsx' : 'Could not submit. Please check your internet connection.'}
                </span>
              </div>
            )}

            <Button 
              type="submit" 
              fullWidth 
              disabled={status === 'submitting'}
              className="mt-4 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl"
            >
              {status === 'submitting' ? (
                  <span className="flex items-center justify-center">
                      <Loader2 className="animate-spin mr-2" />
                      {t.form.submitting}
                  </span>
              ) : (
                  <span className="flex items-center justify-center">
                      {t.form.submit}
                      <Send className="ml-2 w-5 h-5" />
                  </span>
              )}
            </Button>
          </form>
            )}
        </div>

      </div>
    </Section>
  );
};