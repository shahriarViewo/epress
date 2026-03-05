"use client";

import React from "react";
import NextLink from "next/link";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";

// Rich Text Editor Component
const RichTextEditor = () => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "list-disc list-inside ml-2" } },
        orderedList: { HTMLAttributes: { class: "list-decimal list-inside ml-2" } },
      }),
      Link.configure({ openOnClick: false }),
      Underline,
    ],
    content: "<p>Add a detailed description of your product...</p>",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] h-[300px] overflow-y-auto p-4",
      },
    },
  });

  if (!editor) return null;

  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run();
  const toggleBulletList = () => editor.chain().focus().toggleBulletList().run();
  const addLink = () => {
    const url = prompt("Enter URL:");
    if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 flex flex-wrap gap-1">
        <button
          onClick={toggleBold}
          className={`px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
            editor.isActive("bold")
              ? "bg-indigo-100 text-indigo-700"
              : "text-slate-700 hover:bg-slate-200 hover:text-indigo-600"
          }`}
          title="Bold"
        >
          B
        </button>
        <button
          onClick={toggleItalic}
          className={`px-2.5 py-1.5 rounded-lg text-sm italic transition-all ${
            editor.isActive("italic")
              ? "bg-indigo-100 text-indigo-700"
              : "text-slate-700 hover:bg-slate-200 hover:text-indigo-600"
          }`}
          title="Italic"
        >
          I
        </button>
        <button
          onClick={toggleUnderline}
          className={`px-2.5 py-1.5 rounded-lg text-sm underline transition-all ${
            editor.isActive("underline")
              ? "bg-indigo-100 text-indigo-700"
              : "text-slate-700 hover:bg-slate-200 hover:text-indigo-600"
          }`}
          title="Underline"
        >
          U
        </button>
        <div className="w-px h-5 bg-slate-300 mx-1 self-center"></div>
        <button
          onClick={toggleBulletList}
          className={`px-2.5 py-1.5 rounded-lg text-sm transition-all ${
            editor.isActive("bulletList")
              ? "bg-indigo-100 text-indigo-700"
              : "text-slate-700 hover:bg-slate-200 hover:text-indigo-600"
          }`}
          title="Bullet List"
        >
          List
        </button>
        <button
          onClick={addLink}
          className={`px-2.5 py-1.5 rounded-lg text-sm transition-all ${
            editor.isActive("link")
              ? "bg-indigo-100 text-indigo-700"
              : "text-slate-700 hover:bg-slate-200 hover:text-indigo-600"
          }`}
          title="Link"
        >
          Link
        </button>
      </div>

      {/* Editor Content */}
      <div
        className="flex-1 bg-white cursor-text"
        onClick={() => editor.chain().focus().run()}
      >
        <EditorContent
          editor={editor}
          className="h-full prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-p:text-slate-900 text-slate-900"
        />
      </div>
    </div>
  );
};

// 1. Basic Info Component (Indigo Theme)
const BasicInfo = () => (
  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-indigo-100/50 border border-slate-200 border-t-4 border-t-indigo-500 p-6 sm:p-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
      </div>
      <h3 className="text-lg font-bold text-slate-900 tracking-tight">Basic Info</h3>
    </div>

    <div className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">
          Title
        </label>
        <input
          type="text"
          placeholder="Short sleeve t-shirt"
          className="w-full h-11 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">
          Description
        </label>
        <div className="bg-white border border-slate-300 rounded-xl overflow-hidden focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-200">
          <RichTextEditor />
        </div>
      </div>
    </div>
  </div>
);

// 2. Media Upload Component (Rose Theme)
const MediaUpload = () => {
  const [images, setImages] = React.useState<string[]>([
    "https://placehold.co/100x100?text=Image+1",
    "https://placehold.co/100x100?text=Image+2",
  ]);
  const [videos, setVideos] = React.useState<string[]>([
    "https://placehold.co/100x100?text=Video+1",
  ]);

  const [imageUploadType, setImageUploadType] = React.useState<"new" | "existing">("new");
  const [videoUploadType, setVideoUploadType] = React.useState<"new" | "existing">("new");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setImages([...images, fileUrl]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setVideos([...videos, fileUrl]);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-rose-100/50 border border-slate-200 border-t-4 border-t-rose-500 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Media</h3>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-700 mb-3">Images</label>
        <div className="flex flex-wrap gap-4 mb-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
              <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
              <span className="absolute top-1 left-1 bg-slate-900/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                {idx + 1}
              </span>
              <button
                onClick={() => setImages(images.filter((_, i) => i !== idx))}
                className="absolute top-1 right-1 bg-white text-rose-500 rounded-full p-1.5 opacity-0 group-hover:opacity-100 shadow-md transition-all hover:bg-rose-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ))}
          <label className="w-24 h-24 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 hover:border-rose-300 transition-all group">
            <span className="text-2xl text-slate-400 group-hover:text-rose-400">+</span>
            <span className="text-xs font-bold text-slate-500 group-hover:text-rose-500 mt-1">Add</span>
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center gap-2">
          <button
            onClick={() => setImageUploadType("new")}
            className={`px-4 py-2 w-1/2 rounded-lg text-sm font-bold transition-all ${imageUploadType === "new" ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-900"}`}
          >
            Upload new
          </button>
          <button
            onClick={() => setImageUploadType("existing")}
            className={`px-4 py-2 w-1/2 rounded-lg text-sm font-bold transition-all ${imageUploadType === "existing" ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-900"}`}
          >
            Select existing
          </button>
        </div>

        {imageUploadType === "new" && (
          <div className="mt-3 text-center">
            <label className="block w-full py-8 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-rose-50 hover:border-rose-300 transition-all">
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              <p className="text-sm font-bold text-slate-600">Click to upload or drag and drop</p>
              <p className="text-xs font-medium text-slate-400 mt-1">SVG, PNG, JPG or GIF (max. 3MB)</p>
            </label>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-3">Videos</label>
        <div className="flex flex-wrap gap-4 mb-4">
          {videos.map((vid, idx) => (
            <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center group shadow-sm">
              <div className="text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <span className="absolute top-1 left-1 bg-slate-900/70 text-rose-400 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                {idx + 1}
              </span>
              <span className="absolute bottom-1 left-1 bg-slate-900/70 text-rose-400 text-[9px] font-bold px-1 py-0.5 rounded-md uppercase">
                VIDEO
              </span>
              <button
                onClick={() => setVideos(videos.filter((_, i) => i !== idx))}
                className="absolute top-1 right-1 bg-white text-rose-500 rounded-full p-1.5 opacity-0 group-hover:opacity-100 shadow-md transition-all hover:bg-rose-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ))}

          <label className="w-24 h-24 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 hover:border-rose-300 transition-all group">
            <span className="text-2xl text-slate-400 group-hover:text-rose-400">+</span>
            <span className="text-xs font-bold text-slate-500 group-hover:text-rose-500 mt-1">Add</span>
            <input type="file" className="hidden" accept="video/*" onChange={handleVideoUpload} />
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center gap-2">
          <button
            onClick={() => setVideoUploadType("new")}
            className={`px-4 py-2 w-1/2 rounded-lg text-sm font-bold transition-all ${videoUploadType === "new" ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-900"}`}
          >
            Upload new
          </button>
          <button
            onClick={() => setVideoUploadType("existing")}
            className={`px-4 py-2 w-1/2 rounded-lg text-sm font-bold transition-all ${videoUploadType === "existing" ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-900"}`}
          >
            Select existing
          </button>
        </div>

        {videoUploadType === "new" && (
          <div className="mt-3 text-center">
            <label className="block w-full py-8 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-rose-50 hover:border-rose-300 transition-all">
              <input type="file" className="hidden" accept="video/*" onChange={handleVideoUpload} />
              <p className="text-sm font-bold text-slate-600">Click to upload or drag and drop</p>
              <p className="text-xs font-medium text-slate-400 mt-1">MP4, WebM or Ogg (max. 10MB)</p>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Key Features Component (Violet Theme)
const KeyFeatures = () => {
  const [features, setFeatures] = React.useState([
    { id: 1, value: "Phone" },
    { id: 2, value: "Table" },
  ]);

  const addFeature = () => {
    if (features.length < 10) setFeatures([...features, { id: Date.now(), value: "" }]);
  };

  const removeFeature = (id: number) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  const updateFeature = (id: number, newValue: string) => {
    setFeatures(features.map((f) => (f.id === id ? { ...f, value: newValue } : f)));
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-violet-100/50 border border-slate-200 border-t-4 border-t-violet-500 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-violet-100 text-violet-600 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">Key Features</h3>
        </div>
        <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
          {features.length} / 10 Points
        </span>
      </div>
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-3">
            <input
              type="text"
              value={feature.value}
              onChange={(e) => updateFeature(feature.id, e.target.value)}
              placeholder="Add a feature"
              className="flex-1 h-11 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all duration-200"
            />
            <button
              onClick={() => removeFeature(feature.id)}
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-slate-300 text-slate-400 hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        ))}
        {features.length < 10 && (
          <button
            onClick={addFeature}
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-3 text-sm font-bold text-slate-600 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-300 transition-all"
          >
            + Add Feature
          </button>
        )}
      </div>
    </div>
  );
};

// 4. Pricing Component (Emerald Theme)
const Pricing = () => {
  const [scheduleSale, setScheduleSale] = React.useState(false);

  const CurrencyInput = () => (
    <div className="relative flex items-center overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all duration-200">
      <span className="absolute left-4 text-slate-500 font-bold">$</span>
      <input
        type="number"
        placeholder="0.00"
        className="w-full h-11 pl-8 pr-4 bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-emerald-100/50 border border-slate-200 border-t-4 border-t-emerald-500 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Pricing</h3>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Price *</label>
            <CurrencyInput />
          </div>
          <div>
            <label className="flex items-center gap-1.5 block text-sm font-bold text-slate-700 mb-1.5">
              Compare-at price
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </label>
            <CurrencyInput />
          </div>
        </div>

        <div className="w-1/2 pr-3">
          <label className="flex items-center gap-1.5 block text-sm font-bold text-slate-700 mb-1.5">
            Cost per item
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </label>
          <CurrencyInput />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setScheduleSale(!scheduleSale)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border-2 ${scheduleSale ? "bg-emerald-500 border-emerald-500" : "bg-slate-200 border-slate-300"} focus:outline-none focus:ring-4 focus:ring-emerald-500/20`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${scheduleSale ? "translate-x-5" : "translate-x-0.5"}`} />
          </button>
          <span className="text-sm font-bold text-slate-700 cursor-pointer select-none" onClick={() => setScheduleSale(!scheduleSale)}>
            Schedule a sale
          </span>
        </div>

        {scheduleSale && (
          <div className="space-y-4 pt-4 animate-in fade-in slide-in-from-top-2 duration-300 p-5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-1/2 pr-3">
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Sale price *</label>
              <CurrencyInput />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Start date *</label>
                <input type="datetime-local" className="w-full h-11 px-4 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">End date *</label>
                <input type="datetime-local" className="w-full h-11 px-4 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200" />
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 text-sm font-bold text-amber-700 border border-amber-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              The sale price will automatically activate during the scheduled window.
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-slate-200 space-y-5">
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">Advanced pricing controls</h4>
            <p className="text-sm font-medium text-slate-500 mb-4">Set price guardrails to prevent pricing errors. These limits apply to both regular and sale prices.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-1.5 block text-sm font-bold text-slate-700 mb-1.5">
                Minimum allowed price
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </label>
              <CurrencyInput />
            </div>
            <div>
              <label className="flex items-center gap-1.5 block text-sm font-bold text-slate-700 mb-1.5">
                Maximum allowed price
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </label>
              <CurrencyInput />
            </div>
          </div>

          <div className="w-1/2 pr-3">
            <label className="flex items-center gap-1.5 block text-sm font-bold text-slate-700 mb-1.5">
              Minimum Advertised Price (MAP)
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </label>
            <CurrencyInput />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 bg-white transition-all checked:border-emerald-500 checked:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
              />
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 pointer-events-none stroke-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-700 select-none">
              Charge tax on this product
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

// 5. Functional Searchable Category Component (Blue Theme)
const DEMO_CATEGORIES = [
  { id: "c1", name: "Clothing", children: [{ id: "c1-1", name: "Women's Clothing", children: [{ id: "c1-1-1", name: "Dresses" }, { id: "c1-1-2", name: "Tops & Tees" }, { id: "c1-1-3", name: "Activewear" }] }, { id: "c1-2", name: "Men's Clothing", children: [{ id: "c1-2-1", name: "T-Shirts" }, { id: "c1-2-2", name: "Jackets" }, { id: "c1-2-3", name: "Pants" }] }] },
  { id: "c2", name: "Electronics", children: [{ id: "c2-1", name: "Computers", children: [{ id: "c2-1-1", name: "Laptops" }, { id: "c2-1-2", name: "Desktops" }, { id: "c2-1-3", name: "Monitors" }] }, { id: "c2-2", name: "Mobile Phones", children: [{ id: "c2-2-1", name: "Smartphones" }, { id: "c2-2-2", name: "Accessories" }] }] },
];

const getFlattenedCategories = () => {
  const flatList: { id: string; path: string[]; name: string }[] = [];
  DEMO_CATEGORIES.forEach((cat) => {
    cat.children?.forEach((sub) => {
      sub.children?.forEach((subSub) => {
        flatList.push({ id: subSub.id, name: subSub.name, path: [cat.name, sub.name, subSub.name] });
      });
    });
  });
  return flatList;
};

const CategorySection = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [currentLevel, setCurrentLevel] = React.useState(DEMO_CATEGORIES);
  const [navigationPath, setNavigationPath] = React.useState<{id: string, name: string}[]>([]);
  const [selectedCategoryPath, setSelectedCategoryPath] = React.useState<string[] | null>(null);

  const flatCategories = React.useMemo(() => getFlattenedCategories(), []);
  const searchResults = React.useMemo(() => {
    if (!searchTerm) return [];
    return flatCategories.filter((cat) => cat.path.join(" ").toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, flatCategories]);

  const handleMenuClick = (item: any) => {
    if (item.children) {
      setCurrentLevel(item.children);
      setNavigationPath([...navigationPath, { id: item.id, name: item.name }]);
      setSearchTerm("");
    } else {
      setSelectedCategoryPath([...navigationPath.map((p) => p.name), item.name]);
      setIsDropdownOpen(false);
      setSearchTerm("");
      setCurrentLevel(DEMO_CATEGORIES);
      setNavigationPath([]);
    }
  };

  const handleSearchResultClick = (path: string[]) => {
    setSelectedCategoryPath(path);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const handleBackClick = () => {
    const newNavPath = [...navigationPath];
    newNavPath.pop();
    setNavigationPath(newNavPath);
    let level: any = DEMO_CATEGORIES;
    newNavPath.forEach((navItem) => { level = level.find((l: any) => l.id === navItem.id)?.children || []; });
    setCurrentLevel(level);
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-blue-100/50 border border-slate-200 border-t-4 border-t-blue-500 p-6 sm:p-8 relative overflow-visible z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Product Category</h3>
      </div>

      <div className="space-y-4 overflow-visible">
        {selectedCategoryPath && (
          <div className="flex items-center justify-between text-sm text-slate-700 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center flex-wrap gap-2">
              {selectedCategoryPath.map((part, index) => (
                <React.Fragment key={index}>
                  <span className={index === selectedCategoryPath.length - 1 ? "font-bold text-blue-600" : "font-medium"}>
                    {part}
                  </span>
                  {index < selectedCategoryPath.length - 1 && <span className="text-slate-400 text-xs">❯</span>}
                </React.Fragment>
              ))}
            </div>
            <button onClick={() => setSelectedCategoryPath(null)} className="text-slate-400 hover:text-rose-500 ml-2 font-bold transition-colors">
              Clear
            </button>
          </div>
        )}

        <div className="relative overflow-visible">
          <input
            type="text"
            placeholder={selectedCategoryPath ? "Change category..." : "Search or select category..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
            className="w-full h-11 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
          />
          
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 left-0 right-0 z-[9999] backdrop-blur-sm bg-white border border-slate-200 rounded-xl shadow-2xl max-h-72 overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center p-3 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-sm">
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Browse Categories</span>
                 <button onClick={() => setIsDropdownOpen(false)} className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-100 transition-colors">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>

              {searchTerm.length > 0 ? (
                <div className="py-2">
                  {searchResults.length > 0 ? searchResults.map((res) => (
                    <button key={res.id} onClick={() => handleSearchResultClick(res.path)} className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <span className="text-slate-400 text-xs font-medium block mb-1">{res.path[0]} &rsaquo; {res.path[1]}</span>
                      <span className="font-bold">{res.path[2]}</span>
                    </button>
                  )) : (
                    <div className="px-4 py-6 text-sm text-slate-500 text-center font-medium">No categories found for "{searchTerm}"</div>
                  )}
                </div>
              ) : (
                <div>
                  {navigationPath.length > 0 && (
                    <button onClick={handleBackClick} className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-600 bg-blue-50/50 hover:bg-blue-50 border-b border-slate-100 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      Back to {navigationPath.length === 1 ? 'Main Categories' : navigationPath[navigationPath.length - 2].name}
                    </button>
                  )}
                  <div className="py-2">
                    {currentLevel.map((item) => (
                      <button key={item.id} onClick={() => handleMenuClick(item)} className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <span>{item.name}</span>
                        {item.children && <span className="text-slate-400 text-xs">❯</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <p className="text-xs font-medium text-slate-500 mt-2 flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Determines tax rates and adds metafields to improve search and filters.
        </p>
      </div>
    </div>
  );
};

// 6. Shipping Component (Cyan Theme)
const PACKAGE_OPTIONS = [
  { value: "", label: "— Select a package —" },
  { value: "store-default", label: "Store Default Package (30×20×10 cm)" },
  { value: "small-box", label: "Small Box (15×10×8 cm)" },
  { value: "medium-box", label: "Medium Box (30×25×20 cm)" },
  { value: "large-box", label: "Large Box (60×40×30 cm)" },
  { value: "extra-large-box", label: "Extra Large Box (80×60×50 cm)" },
  { value: "poly-mailer-sm", label: "Poly Mailer – Small (25×35 cm)" },
  { value: "poly-mailer-lg", label: "Poly Mailer – Large (40×55 cm)" },
  { value: "bubble-wrap-envelope", label: "Bubble Wrap Envelope (22×30 cm)" },
  { value: "flat-pack", label: "Flat Pack / Envelope (A4)" },
  { value: "tube", label: "Shipping Tube (Ø10 × 100 cm)" },
  { value: "custom", label: "Custom Packaging" },
];
const WEIGHT_UNITS = ["kg", "g", "lb", "oz"];

const Shipping = () => {
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [weightUnit, setWeightUnit] = React.useState("kg");

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-cyan-100/50 border border-slate-200 border-t-4 border-t-cyan-500 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Shipping</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 block text-sm font-bold text-slate-700 mb-2">
            Package
            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
              Store default
            </span>
          </label>
          <div className="relative">
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full h-11 pl-4 pr-10 appearance-none bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 cursor-pointer"
            >
              {PACKAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>

          {selectedPackage && selectedPackage !== "" && (
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 animate-in fade-in duration-200">
              <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              <div>
                <p className="text-xs font-bold text-cyan-800">
                  {PACKAGE_OPTIONS.find((o) => o.value === selectedPackage)?.label}
                </p>
                <p className="text-[11px] font-medium text-cyan-600 mt-0.5">Selected package for this product</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-slate-200" />

        <div>
          <label className="flex items-center gap-1.5 block text-sm font-bold text-slate-700 mb-1.5">
            Product weight
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </label>
          <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all duration-200">
            <input
              type="number" min="0" step="0.01" placeholder="0.00"
              value={weight} onChange={(e) => setWeight(e.target.value)}
              className="h-11 flex-1 bg-transparent px-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <div className="flex border-l border-slate-200 bg-slate-50">
              {WEIGHT_UNITS.map((unit) => (
                <button
                  key={unit} type="button" onClick={() => setWeightUnit(unit)}
                  className={`h-11 px-3.5 text-xs font-bold uppercase transition-colors ${weightUnit === unit ? "bg-cyan-500 text-white" : "text-slate-500 hover:text-slate-800 hover:bg-slate-200"}`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs font-medium text-slate-500">Used to calculate shipping rates. Enter weight including packaging.</p>
        </div>
      </div>
    </div>
  );
};
const QUICK_SIZES = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL"];

const QUICK_COLORS = [
  { name: "Black", hex: "#000000" }, { name: "Charcoal", hex: "#374151" }, { name: "Gray", hex: "#6B7280" },
  { name: "Navy", hex: "#1E3A8A" }, { name: "White", hex: "#FFFFFF", border: true }, { name: "Beige", hex: "#F5F5DC", border: true },
  { name: "Blue", hex: "#3B82F6" }, { name: "Oak", hex: "#8B5A2B" }, { name: "Olive", hex: "#4B5320" },
  { name: "Red", hex: "#EF4444" }, { name: "Brown", hex: "#A52A2A" }, { name: "Walnut", hex: "#5C4033" },
  { name: "Cream", hex: "#FFFDD0", border: true }, { name: "Green", hex: "#22C55E" }, { name: "Light Gray", hex: "#D1D5DB" },
  { name: "Natural", hex: "#E8DCC4" }, { name: "Yellow", hex: "#EAB308" }, { name: "Orange", hex: "#F97316" },
  { name: "Purple", hex: "#A855F7" }, { name: "Pink", hex: "#FBCFE8" }, { name: "Maroon", hex: "#800000" },
  { name: "Teal", hex: "#14B8A6" }
];

// 7. Variants Component (Teal Theme)
const VariantsSection = () => {
  const [activeModal, setActiveModal] = React.useState<'size' | 'color' | null>(null);
  const [savedSizes, setSavedSizes] = React.useState<string[]>([]);
  const [savedColors, setSavedColors] = React.useState<{ name: string; hex: string }[]>([]);
  const [tempSizes, setTempSizes] = React.useState<string[]>([]);
  const [tempColors, setTempColors] = React.useState<{ name: string; hex: string }[]>([]);
  const [showCustomSize, setShowCustomSize] = React.useState(false);
  const [customSizeVal, setCustomSizeVal] = React.useState("");
  const [showCustomColor, setShowCustomColor] = React.useState(false);
  const [customColorName, setCustomColorName] = React.useState("");
  const [customColorHex, setCustomColorHex] = React.useState("#3B82F6");

  const openModal = (type: 'size' | 'color') => {
    if (type === 'size') setTempSizes([...savedSizes]);
    if (type === 'color') setTempColors([...savedColors]);
    setActiveModal(type);
    setShowCustomSize(false);
    setShowCustomColor(false);
  };
  const closeModal = () => setActiveModal(null);
  const handleSaveSizeModal = () => { setSavedSizes(tempSizes); closeModal(); };
  const handleSaveColorModal = () => { setSavedColors(tempColors); closeModal(); };
  const toggleTempSize = (size: string) => { setTempSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]); };
  const toggleTempColor = (colorObj: { name: string; hex: string }) => { setTempColors(prev => prev.some(c => c.name === colorObj.name) ? prev.filter(c => c.name !== colorObj.name) : [...prev, colorObj]); };
  const addCustomSize = () => { if (customSizeVal.trim() && !tempSizes.includes(customSizeVal.trim())) setTempSizes([...tempSizes, customSizeVal.trim()]); setCustomSizeVal(""); setShowCustomSize(false); };
  const addCustomColor = () => { if (customColorName.trim() && !tempColors.some(c => c.name === customColorName.trim())) setTempColors([...tempColors, { name: customColorName.trim(), hex: customColorHex }]); setCustomColorName(""); setCustomColorHex("#3B82F6"); setShowCustomColor(false); };

  const combinations = React.useMemo(() => {
    if (savedSizes.length === 0 && savedColors.length === 0) return [];
    if (savedSizes.length > 0 && savedColors.length === 0) return savedSizes.map(s => ({ title: s }));
    if (savedSizes.length === 0 && savedColors.length > 0) return savedColors.map(c => ({ title: c.name }));
    const combos: { title: string }[] = [];
    savedSizes.forEach(s => { savedColors.forEach(c => { combos.push({ title: `${s} / ${c.name}` }); }); });
    return combos;
  }, [savedSizes, savedColors]);

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-teal-100/50 border border-slate-200 border-t-4 border-t-teal-500 p-6 sm:p-8 relative font-sans">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">Variants</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-teal-600 uppercase tracking-wide">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          Configure Options
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => openModal('size')} className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-white hover:border-teal-400 hover:text-teal-600 hover:shadow-sm transition-all">
            <span className="text-lg leading-none">+</span> Size
          </button>
          <button onClick={() => openModal('color')} className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-white hover:border-teal-400 hover:text-teal-600 hover:shadow-sm transition-all">
            <span className="text-lg leading-none">+</span> Color
          </button>
        </div>
      </div>

      {(savedSizes.length > 0 || savedColors.length > 0) && (
        <div className="space-y-4 mb-6 border-t border-slate-200 pt-6">
          {savedSizes.length > 0 && (
            <div>
              <p className="text-sm font-bold text-slate-700 mb-2">Sizes:</p>
              <div className="flex flex-wrap gap-2">
                {savedSizes.map(size => (
                  <span key={size} className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
                    {size}
                    <button onClick={() => setSavedSizes(prev => prev.filter(s => s !== size))} className="text-slate-400 hover:text-rose-500 transition-colors">&times;</button>
                  </span>
                ))}
              </div>
            </div>
          )}
          {savedColors.length > 0 && (
            <div>
              <p className="text-sm font-bold text-slate-700 mb-2">Colors:</p>
              <div className="flex flex-wrap gap-2">
                {savedColors.map(color => (
                  <span key={color.name} className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-200" style={{ backgroundColor: color.hex }}></span>
                    {color.name}
                    <button onClick={() => setSavedColors(prev => prev.filter(c => c.name !== color.name))} className="text-slate-400 hover:text-rose-500 transition-colors">&times;</button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {combinations.length > 0 && (
        <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-5 py-4 border-b border-slate-200">
            <h4 className="text-sm font-bold text-slate-900">Variant Combinations</h4>
            <p className="text-xs font-medium text-slate-500 mt-1">Set inventory and pricing for each variation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-white text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-5 py-4 font-bold">Variant</th>
                  <th className="px-5 py-4 font-bold">Price</th>
                  <th className="px-5 py-4 font-bold">Available</th>
                  <th className="px-5 py-4 font-bold">SKU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {combinations.map((combo, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900">{combo.title}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 shadow-sm focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 transition-all">
                        <span className="text-slate-400 font-bold text-sm">$</span>
                        <input type="number" placeholder="0.00" className="w-20 bg-transparent py-2 pl-2 text-sm font-medium outline-none" />
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <input type="number" placeholder="0" className="w-20 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                    </td>
                    <td className="px-5 py-3">
                      <input type="text" placeholder="SKU" className="w-full min-w-[120px] rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-300 overflow-hidden ring-1 ring-slate-900/5">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Add {activeModal === 'size' ? 'Size' : 'Color'} Values</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Select or create new variants</p>
              </div>
              <button onClick={closeModal} className="rounded-full p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar bg-slate-50/50">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs">1</span>
                      Select {activeModal === 'size' ? 'Size' : 'Color'}
                    </h4>
                    <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-sm">
                      {activeModal === 'size' ? tempSizes.length : tempColors.length} selected
                    </span>
                  </div>
                   
                   {activeModal === 'size' ? (
                      <div className="flex flex-wrap gap-3">
                        {QUICK_SIZES.map((size) => (
                           <button
                              key={size} type="button" onClick={() => toggleTempSize(size)}
                              className={`group min-w-[50px] flex items-center justify-center py-2 px-4 text-sm font-bold rounded-xl border transition-all duration-200 ${
                                tempSizes.includes(size)
                                  ? "bg-teal-600 border-teal-600 text-white shadow-md"
                                  : "bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700"
                              }`}
                            >
                              {size}
                            </button>
                        ))}
                      </div>
                   ) : (
                      <div className="flex flex-wrap gap-3">
                         {QUICK_COLORS.map(color => (
                            <button 
                              key={color.name} onClick={() => toggleTempColor(color)} 
                              className={`flex items-center justify-start gap-3 py-2 px-3 text-sm font-bold rounded-xl border transition-all duration-200 group ${
                                tempColors.some(c => c.name === color.name) 
                                  ? 'bg-teal-50 border-teal-500 text-teal-800 ring-1 ring-teal-500 shadow-sm' 
                                  : 'border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-700'
                                }`}
                            >
                              <span className={`w-5 h-5 flex-shrink-0 rounded-full shadow-sm ring-1 ring-black/5 ${color.border ? 'border border-slate-200' : ''}`} style={{ backgroundColor: color.hex }} />
                              <span className="truncate">{color.name}</span>
                              {tempColors.some(c => c.name === color.name) && (
                                <svg className="w-4 h-4 ml-1.5 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                              )}
                            </button> 
                         ))}
                      </div>
                   )}
                </div>

                <div className="pt-6 border-t border-slate-200">
                   <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs">2</span>
                      Add Custom Option
                   </h4>
                   <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                      {activeModal === 'size' ? (
                          <div className="flex gap-3">
                            <input 
                                type="text" value={customSizeVal} onChange={(e) => setCustomSizeVal(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addCustomSize()}
                                placeholder="Type custom size (e.g. 32, Petite)..." 
                                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium shadow-sm outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all" 
                              />
                            <button 
                              onClick={addCustomSize} disabled={!customSizeVal.trim()}
                              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-bold shadow-sm transition-all flex items-center gap-2"
                            >
                              Add
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </button>
                          </div>
                      ) : (
                          <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex items-center gap-3 bg-white border border-slate-300 rounded-xl px-3 py-1.5 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all shadow-sm">
                                <div className="relative group">
                                  <input type="color" value={customColorHex} onChange={(e) => setCustomColorHex(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                                  <div className="w-8 h-8 rounded-lg border border-slate-200 shadow-sm" style={{ backgroundColor: customColorHex }} />
                                </div>
                                <div className="h-6 w-px bg-slate-200"></div>
                              <input type="text" value={customColorHex} onChange={(e) => setCustomColorHex(e.target.value)} className="w-20 bg-transparent text-sm font-bold font-mono text-slate-700 outline-none uppercase" />
                            </div>
                            <input 
                                type="text" value={customColorName} onChange={(e) => setCustomColorName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addCustomColor()}
                                placeholder="Color Name (e.g. Midnight Blue)"
                                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium shadow-sm outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all" 
                            />
                             <button 
                              onClick={addCustomColor} disabled={!customColorName.trim()}
                              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-bold shadow-sm transition-all flex items-center gap-2"
                            >
                              Add
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </button>
                          </div>
                      )}
                      <p className="mt-3 text-[11px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Added customs are automatically selected
                      </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100 bg-white">
              <button onClick={closeModal} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors">
                Cancel
              </button>
              <button 
                onClick={activeModal === 'size' ? handleSaveSizeModal : handleSaveColorModal}
                className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-500/30 hover:from-teal-600 hover:to-emerald-600 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                Done
                <span className="bg-white/20 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                   {activeModal === 'size' ? tempSizes.length : tempColors.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 8. Product Status Component (Amber Theme)
const ProductStatus = () => (
  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-amber-100/50 border border-slate-200 border-t-4 border-t-amber-500 p-6 sm:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h3 className="text-lg font-bold text-slate-900 tracking-tight">Status</h3>
    </div>
    
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-1.5">
        Visibility
      </label>
      <div className="relative">
        <select className="w-full h-11 pl-4 pr-10 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-200 appearance-none cursor-pointer">
          <option value="draft">Draft</option>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

// 9. Organization Component (Purple Theme)
const Organization = () => {
  const [collections, setCollections] = React.useState<string[]>(["Home page"]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleAddCollection = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery && !collections.includes(trimmedQuery)) {
      setCollections([...collections, trimmedQuery]);
      setSearchQuery("");
    }
  };

  const handleRemoveCollection = (collectionToRemove: string) => {
    setCollections(collections.filter(c => c !== collectionToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCollection();
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-purple-100/50 border border-slate-200 border-t-4 border-t-purple-500 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">Organization</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Type</label>
            <input
              type="text" placeholder="e.g. T-Shirt"
              className="w-full h-11 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Vendor</label>
            <input
              type="text" placeholder="e.g. Nike"
              className="w-full h-11 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-slate-700">Collections</label>
                <NextLink href="/add-collection" className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1.5 transition-colors">
                    + Add new collection
                </NextLink>
            </div>
            
            {collections.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {collections.map((collection) => (
                  <span key={collection} className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">
                    {collection}
                    <button 
                      onClick={() => handleRemoveCollection(collection)}
                      className="text-slate-400 hover:text-rose-500 transition-colors ml-1"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input
                  type="text" 
                  placeholder="Search for collections"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full h-11 pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200"
                />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Tags</label>
            <input
              type="text" placeholder="Vintage, cotton, summer"
              className="w-full h-11 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200"
            />
          </div>
        </div>
    </div>
  );
};

// 10. Main Layout Component
const AddProductLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 text-slate-900 font-sans p-4 sm:p-8">
      <main className="max-w-screen-2xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Add Product
          </h2>

          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-white border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
              Discard
            </button>
            <button className="rounded-xl bg-white border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
              Save Draft
            </button>
            <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-2.5 text-sm font-bold text-white hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5">
              Publish Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column – Main Details */}
          <div className="lg:col-span-2 space-y-8">
            <BasicInfo />
            <MediaUpload />
            <KeyFeatures />
            <CategorySection />
            <Pricing />
            <Shipping />
            <VariantsSection />
          </div>

          {/* Right Column – Meta Details */}
          <div className="space-y-8">
            <ProductStatus />
            <Organization />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProductLayout;