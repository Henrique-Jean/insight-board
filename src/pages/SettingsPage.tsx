import { useState } from "react";
import {User, Bell, Shield} from "lucide-react";
import { Switch } from "../components/Switch";

export function SettingsPage () {
    const [emailNoif, setEmailNotif] = useState(true);
    const [pushNotif, setPushNotif] = useState(false);
    const [marketingEmails, setMarketingEmails] = useState(false);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
                <p className="text-slate-500"> Manage your account preferences</p>
            </div>

            <div className="grid gap-8 md:grid-cols-[250px_1fr]">

                <nav className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700">
                        <User size={18} />
                        Profile
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Bell size={18} />
                        Notifications
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Shield size={18} />
                        Security
                    </button>
                </nav>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-800 mb-4">Public Profile</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                                    <User size={32} />
                                </div>

                                <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                                    Change Avatar
                                </button> 
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <input type="text" defaultValue="Admin" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input type="text" defaultValue="User" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Bio</label>
                                <textarea rows={3} className="w-full w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Tell us a little bit about yourself..." />
                                <p className="text-xs text-slate-500">Brief description for your profile. Urls are Hyperlinked.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-800 mb-4">Notifications</h2>
                            <div>
                                <p className="font-medium text-slate-800">Email Notifications.</p>
                                <p className="font-medium text-slate-500">Receive emails about your account activity.</p>
                            </div>
                            <Switch checked={emailNoif} onCheckedChange={setEmailNotif} />
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div>
                                <p className="font-medium text-slate-800">Push Notifications.</p>
                                <p className="text-sm text-slate-500">Receive push notifications on your device</p>
                            </div>
                            <Switch checked={pushNotif} onCheckedChange={setPushNotif} />
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="font-medium text-slate-800">Marketing Emails</p>
                                <p className="text-sm text-slate-500">Receive emails about new products, features and more.</p>
                            </div>
                            <Switch checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                                Cancel
                            </button>

                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}