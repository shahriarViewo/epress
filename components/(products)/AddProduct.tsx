"use client";

import React from "react";
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
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside ml-2",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal list-inside ml-2",
          },
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      Underline,
    ],
    content: "<p>Add a detailed description of your product...</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] h-[300px] overflow-y-auto p-4",
      },
    },
  });

  if (!editor) return null;

  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run();
  const toggleBulletList = () =>
    editor.chain().focus().toggleBulletList().run();
  const addLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-500 p-2 flex flex-wrap gap-2 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white/90">
        <button
          onClick={toggleBold}
          className={`p-2 rounded px-3 text-sm border shadow-sm transition ${
            editor.isActive("bold")
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white hover:bg-gray-50 border-gray-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
          title="Bold"
        >
          B
        </button>
        <button
          onClick={toggleItalic}
          className={`p-2 rounded italic px-3 text-sm border shadow-sm transition ${
            editor.isActive("italic")
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white hover:bg-gray-50 border-gray-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
          title="Italic"
        >
          I
        </button>
        <button
          onClick={toggleUnderline}
          className={`p-2 rounded underline px-3 text-sm border shadow-sm transition ${
            editor.isActive("underline")
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white hover:bg-gray-50 border-gray-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
          title="Underline"
        >
          U
        </button>
        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-1"></div>
        <button
          onClick={toggleBulletList}
          className={`p-2 rounded px-3 text-sm border shadow-sm transition ${
            editor.isActive("bulletList")
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white hover:bg-gray-50 border-gray-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
          title="Bullet List"
        >
          List
        </button>
        <button
          onClick={addLink}
          className={`p-2 rounded px-3 text-sm border shadow-sm transition ${
            editor.isActive("link")
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white hover:bg-gray-50 border-gray-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
          title="Link"
        >
          Link
        </button>
      </div>

      {/* Editor Content */}
      <div
        className="flex-1 bg-white cursor-text dark:bg-gray-900"
        onClick={() => editor.chain().focus().run()}
      >
        <EditorContent
          editor={editor}
          className="h-full prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-p:text-gray-700 dark:prose-p:text-gray-300 dark:text-gray-200"
        />
      </div>
    </div>
  );
};

// 1. Basic Info Component
const BasicInfo = () => (
  <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
    <div className="mb-6">
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
        Title
      </label>
      <input
        type="text"
        placeholder="Short sleeve t-shirt"
        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
      />
    </div>

    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
        Description
      </label>
      <div className="rounded-lg border border-gray-500 bg-transparent overflow-hidden focus-within:border-brand-300 focus-within:ring focus-within:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900">
        <RichTextEditor />
      </div>
    </div>
  </div>
);

// 2. Media Upload Component
const MediaUpload = () => {
  const [images, setImages] = React.useState<string[]>([
    "https://placehold.co/100x100?text=Image+1",
    "https://placehold.co/100x100?text=Image+2",
  ]);
  const [videos, setVideos] = React.useState<string[]>([
    "https://placehold.co/100x100?text=Video+1",
  ]);

  const [imageUploadType, setImageUploadType] = React.useState<
    "new" | "existing"
  >("new");
  const [videoUploadType, setVideoUploadType] = React.useState<
    "new" | "existing"
  >("new");

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
    <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">
        Media
      </h3>

      {/* Images Section */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Images
        </label>

        <div className="flex flex-wrap gap-4 mb-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-500 dark:border-gray-700 group"
            >
              <img
                src={img}
                alt={`Product ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 left-1 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                {idx + 1}
              </span>
              <button
                onClick={() => setImages(images.filter((_, i) => i !== idx))}
                className="absolute top-1 right-1 bg-white text-red-600 rounded-full p-2 opacity-0 group-hover:opacity-100 shadow-sm border border-gray-200 transition-all hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}

          <label className="w-24 h-24 rounded-lg border border-dashed border-gray-500 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition">
            <span className="text-2xl text-gray-400 dark:text-gray-500">+</span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
              Add
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <div className="rounded-xl border border-gray-500 dark:border-gray-700 p-4 flex items-center justify-center gap-6">
          <button
            onClick={() => setImageUploadType("new")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${imageUploadType === "new" ? "bg-gray-100 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
          >
            Upload new
          </button>
          <button
            onClick={() => setImageUploadType("existing")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${imageUploadType === "existing" ? "bg-gray-100 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
          >
            Select existing
          </button>
        </div>

        {imageUploadType === "new" && (
          <div className="mt-2 text-center">
            <label className="block w-full py-8 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50 transition">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                SVG, PNG, JPG or GIF (max. 3MB)
              </p>
            </label>
          </div>
        )}
      </div>

      {/* Videos Section */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Videos
        </label>

        <div className="flex flex-wrap gap-4 mb-4">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-500 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center group"
            >
              <div className="text-gray-400 dark:text-gray-600">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="absolute top-1 left-1 bg-black/70 text-brand-500 text-[10px] font-bold px-1.5 py-0.5 rounded">
                {idx + 1}
              </span>
              <span className="absolute bottom-1 left-1 bg-black/70 text-brand-500 text-[9px] font-bold px-1 py-0.5 rounded uppercase">
                VIDEO
              </span>
              <button
                onClick={() => setVideos(videos.filter((_, i) => i !== idx))}
                className="absolute top-1 right-1 bg-white text-red-600 rounded-full p-2 opacity-0 group-hover:opacity-100 shadow-sm border border-gray-200 transition-all hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}

          <label className="w-24 h-24 rounded-lg border border-dashed border-gray-500 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition">
            <span className="text-2xl text-gray-400 dark:text-gray-500">+</span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
              Add
            </span>
            <input
              type="file"
              className="hidden"
              accept="video/*"
              onChange={handleVideoUpload}
            />
          </label>
        </div>

        <div className="rounded-xl border border-gray-500 dark:border-gray-700 p-4 flex items-center justify-center gap-6">
          <button
            onClick={() => setVideoUploadType("new")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${videoUploadType === "new" ? "bg-gray-100 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
          >
            Upload new
          </button>
          <button
            onClick={() => setVideoUploadType("existing")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${videoUploadType === "existing" ? "bg-gray-100 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
          >
            Select existing
          </button>
        </div>

        {videoUploadType === "new" && (
          <div className="mt-2 text-center">
            <label className="block w-full py-8 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50 transition">
              <input
                type="file"
                className="hidden"
                accept="video/*"
                onChange={handleVideoUpload}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                MP4, WebM or Ogg (max. 10MB)
              </p>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Key Features Component
const KeyFeatures = () => {
  const [features, setFeatures] = React.useState([
    { id: 1, value: "Phone" },
    { id: 2, value: "Table" },
  ]);

  const addFeature = () => {
    if (features.length < 10) {
      setFeatures([...features, { id: Date.now(), value: "" }]);
    }
  };

  const removeFeature = (id: number) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  const updateFeature = (id: number, newValue: string) => {
    setFeatures(
      features.map((f) => (f.id === id ? { ...f, value: newValue } : f)),
    );
  };

  return (
    <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Key Features
        </h3>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-white/10 dark:text-white/90">
          {features.length} / 10 Points
        </span>
      </div>
      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-2">
            <input
              type="text"
              value={feature.value}
              onChange={(e) => updateFeature(feature.id, e.target.value)}
              placeholder="Add a feature"
              className="dark:bg-dark-900 h-11 flex-1 rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
            <button
              onClick={() => removeFeature(feature.id)}
              className="flex items-center justify-center w-11 h-11 rounded-lg border border-gray-500 text-gray-500 hover:bg-gray-50 hover:text-error-500 transition-colors dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-error-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
        {features.length < 10 && (
          <button
            onClick={addFeature}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-500 bg-gray-50 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition"
          >
            + Add Feature
          </button>
        )}
      </div>
    </div>
  );
};

// 4. Pricing Component
const Pricing = () => {
  const [scheduleSale, setScheduleSale] = React.useState(false);

  const CurrencyInput = () => (
    <div className="flex h-11 w-full items-center overflow-hidden rounded-lg border-2 border-gray-500 bg-transparent px-3 shadow-theme-xs focus-within:border-brand-500 focus-within:ring focus-within:ring-brand-500/20 dark:border-gray-600 dark:bg-gray-900 dark:focus-within:border-brand-500">
      <span className="text-gray-500 dark:text-gray-400 font-medium">$</span>
      <input
        type="number"
        placeholder="0.00"
        className="h-full w-full bg-transparent pl-2 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none dark:text-white/90 dark:placeholder:text-white/30"
      />
    </div>
  );

  return (
    <div className="rounded-2xl border-2 border-gray-500 bg-white p-5 dark:border-gray-700 dark:bg-white/[0.03] md:p-6">
      <h3 className="mb-4 text-base font-bold text-gray-800 dark:text-white/90">
        Pricing
      </h3>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
              Price *
            </label>
            <CurrencyInput />
          </div>
          <div className="flex-1">
            <label className="mb-1.5 flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300">
              Compare-at price
              <svg
                className="h-3.5 w-3.5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </label>
            <CurrencyInput />
          </div>
        </div>

        <div className="w-1/2 pr-2">
          <label className="mb-1.5 flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300">
            Cost per item
            <svg
              className="h-3.5 w-3.5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          <CurrencyInput />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setScheduleSale(!scheduleSale)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border-2 ${scheduleSale ? "bg-brand-500 border-brand-500 dark:bg-brand-600 dark:border-brand-600" : "bg-gray-200 border-gray-500 dark:bg-gray-700 dark:border-gray-600"} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${scheduleSale ? "translate-x-5" : "translate-x-0.5"}`}
            />
          </button>
          <span
            className="text-sm font-bold text-gray-700 dark:text-gray-300 cursor-pointer select-none"
            onClick={() => setScheduleSale(!scheduleSale)}
          >
            Schedule a sale
          </span>
        </div>

        {scheduleSale && (
          <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="w-1/2 pr-2">
              <label className="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                Sale price *
              </label>
              <CurrencyInput />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Start date *
                </label>
                <input
                  type="datetime-local"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border-2 border-gray-500 bg-transparent px-4 py-2.5 text-sm font-medium text-gray-800 shadow-theme-xs focus:border-brand-500 focus:outline-none focus:ring focus:ring-brand-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-500"
                />
              </div>
              <div className="flex-1">
                <label className="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                  End date *
                </label>
                <input
                  type="datetime-local"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border-2 border-gray-500 bg-transparent px-4 py-2.5 text-sm font-medium text-gray-800 shadow-theme-xs focus:border-brand-500 focus:outline-none focus:ring focus:ring-brand-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-500"
                />
              </div>
            </div>

            <div className="rounded-lg bg-[#FFFBEA] p-4 text-sm font-medium text-[#927F2D] dark:bg-yellow-900/20 dark:text-yellow-500 border-2 border-[#FEF3C7] dark:border-yellow-900/40">
              The sale price will automatically activate during the scheduled
              window
            </div>
          </div>
        )}

        <div className="pt-4 space-y-4">
          <h4 className="text-sm font-bold text-gray-800 dark:text-white/90">
            Advanced pricing controls
          </h4>

          <div className="rounded-lg bg-brand-50 p-4 text-sm font-medium text-brand-700 dark:bg-brand-900/10 dark:text-brand-400 border-2 border-brand-200 dark:border-brand-900/30">
            Set price guardrails to prevent pricing errors. These limits apply
            to both regular and sale prices.
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="mb-1.5 flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300">
                Minimum allowed price
                <svg
                  className="h-3.5 w-3.5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </label>
              <CurrencyInput />
            </div>
            <div className="flex-1">
              <label className="mb-1.5 flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300">
                Maximum allowed price
                <svg
                  className="h-3.5 w-3.5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </label>
              <CurrencyInput />
            </div>
          </div>

          <div className="w-1/2 pr-2">
            <label className="mb-1.5 flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300">
              Minimum Advertised Price (MAP)
              <svg
                className="h-3.5 w-3.5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </label>
            <CurrencyInput />
          </div>
        </div>

        <div className="pt-4 border-t-2 border-gray-500 dark:border-gray-700">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-500 bg-white transition-all checked:border-brand-500 checked:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-900 dark:checked:border-brand-500 dark:checked:bg-brand-500 dark:focus:ring-offset-gray-900"
              />
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 pointer-events-none stroke-white opacity-0 peer-checked:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 select-none">
              Charge tax on this product
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. Multi-level Category Component (NEW)
// ─────────────────────────────────────────────────────────────────────────────

type SubCategory = { value: string; label: string };
type CategoryNode = {
  value: string;
  label: string;
  icon: string;
  subCategories: SubCategory[];
};

const CATEGORY_TREE: CategoryNode[] = [
  {
    value: "automotive",
    label: "Automotive",
    icon: "🚗",
    subCategories: [
      { value: "car-electronics", label: "Car Electronics" },
      { value: "car-parts", label: "Car Parts & Accessories" },
      { value: "bike", label: "Bike & Cycling" },
      { value: "tires-wheels", label: "Tires & Wheels" },
      { value: "car-care", label: "Car Care & Cleaning" },
      { value: "tools-equipment", label: "Tools & Equipment" },
    ],
  },
  {
    value: "clothing",
    label: "Clothing",
    icon: "👕",
    subCategories: [
      { value: "mens-clothing", label: "Men's Clothing" },
      { value: "womens-clothing", label: "Women's Clothing" },
      { value: "kids-clothing", label: "Kids' Clothing" },
      { value: "accessories", label: "Accessories" },
      { value: "sportswear", label: "Sportswear & Activewear" },
      { value: "footwear", label: "Footwear" },
    ],
  },
  {
    value: "electronics",
    label: "Electronics",
    icon: "💻",
    subCategories: [
      { value: "smartphones", label: "Smartphones & Tablets" },
      { value: "laptops", label: "Laptops & Computers" },
      { value: "audio", label: "Audio & Headphones" },
      { value: "cameras", label: "Cameras & Photography" },
      { value: "gaming", label: "Gaming" },
      { value: "smart-home", label: "Smart Home Devices" },
    ],
  },
  {
    value: "home-garden",
    label: "Home & Garden",
    icon: "🏡",
    subCategories: [
      { value: "furniture", label: "Furniture" },
      { value: "bedding", label: "Bedding & Bath" },
      { value: "kitchen", label: "Kitchen & Dining" },
      { value: "garden", label: "Garden & Outdoor" },
      { value: "lighting", label: "Lighting & Decor" },
      { value: "storage", label: "Storage & Organization" },
    ],
  },
  {
    value: "sports",
    label: "Sports & Outdoors",
    icon: "⚽",
    subCategories: [
      { value: "team-sports", label: "Team Sports" },
      { value: "fitness", label: "Fitness & Exercise" },
      { value: "outdoor-recreation", label: "Outdoor Recreation" },
      { value: "water-sports", label: "Water Sports" },
      { value: "winter-sports", label: "Winter Sports" },
    ],
  },
  {
    value: "beauty",
    label: "Beauty & Personal Care",
    icon: "💄",
    subCategories: [
      { value: "skincare", label: "Skincare" },
      { value: "haircare", label: "Hair Care" },
      { value: "makeup", label: "Makeup & Cosmetics" },
      { value: "fragrance", label: "Fragrance" },
      { value: "mens-grooming", label: "Men's Grooming" },
    ],
  },
];

const CategorySection = () => {
  const [selectedParent, setSelectedParent] = React.useState<string>("");
  const [selectedSub, setSelectedSub] = React.useState<string>("");

  const parentNode =
    CATEGORY_TREE.find((c) => c.value === selectedParent) ?? null;

  const handleParentChange = (val: string) => {
    setSelectedParent(val);
    setSelectedSub("");
  };

  // Breadcrumb display
  const breadcrumbParts: string[] = [];
  if (parentNode) breadcrumbParts.push(parentNode.label);
  if (selectedSub) {
    const sub = parentNode?.subCategories.find((s) => s.value === selectedSub);
    if (sub) breadcrumbParts.push(sub.label);
  }

  return (
    <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Category
        </h3>
        {breadcrumbParts.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.05] rounded-full px-3 py-1.5">
            {breadcrumbParts.map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <svg
                    className="w-3 h-3 text-gray-400 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                <span
                  className={
                    i === breadcrumbParts.length - 1
                      ? "font-semibold text-gray-700 dark:text-gray-300"
                      : ""
                  }
                >
                  {part}
                </span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-5">
        {/* Step 1 – Parent Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-xs font-bold mr-1.5">
              1
            </span>
            Parent Category
          </label>

          {/* Visual category grid */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {CATEGORY_TREE.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleParentChange(cat.value)}
                className={`flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 text-center transition-all
                  ${
                    selectedParent === cat.value
                      ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-600"
                      : "border-gray-200 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.02] dark:hover:border-gray-500 dark:hover:bg-white/[0.05]"
                  }`}
              >
                <span className="text-xl leading-none">{cat.icon}</span>
                <span
                  className={`text-[11px] font-medium leading-tight ${selectedParent === cat.value ? "text-brand-700 dark:text-brand-400" : "text-gray-600 dark:text-gray-400"}`}
                >
                  {cat.label}
                </span>
                {selectedParent === cat.value && (
                  <span className="absolute top-1.5 right-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-brand-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Also a select for accessibility / search */}
          <select
            value={selectedParent}
            onChange={(e) => handleParentChange(e.target.value)}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
          >
            <option value="">— Select a parent category —</option>
            {CATEGORY_TREE.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.icon} {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Step 2 – Sub Category (only shown when parent is chosen) */}
        {parentNode && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-200">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-xs font-bold mr-1.5">
                2
              </span>
              Sub-category{" "}
              <span className="text-gray-400 dark:text-gray-600 ml-1">
                under {parentNode.label}
              </span>
            </label>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {parentNode.subCategories.map((sub) => (
                <button
                  key={sub.value}
                  type="button"
                  onClick={() => setSelectedSub(sub.value)}
                  className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2.5 text-left text-sm transition-all
                    ${
                      selectedSub === sub.value
                        ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:border-brand-600 dark:text-brand-400"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.02] dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-white/[0.05]"
                    }`}
                >
                  <span
                    className={`flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedSub === sub.value ? "border-brand-500 bg-brand-500" : "border-gray-300 dark:border-gray-600"}`}
                  >
                    {selectedSub === sub.value && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span className="font-medium text-xs">{sub.label}</span>
                </button>
              ))}
            </div>

            <select
              value={selectedSub}
              onChange={(e) => setSelectedSub(e.target.value)}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
            >
              <option value="">— Select a sub-category —</option>
              {parentNode.subCategories.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Confirmation pill */}
        {selectedParent && selectedSub && (
          <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 dark:bg-green-900/10 dark:border-green-900/30 animate-in fade-in duration-200">
            <svg
              className="w-4 h-4 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-green-700 dark:text-green-400 font-medium">
              Category set to <strong>{parentNode?.label}</strong> →{" "}
              <strong>
                {
                  parentNode?.subCategories.find((s) => s.value === selectedSub)
                    ?.label
                }
              </strong>
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedParent("");
                setSelectedSub("");
              }}
              className="ml-auto text-green-400 hover:text-green-600 dark:hover:text-green-300 transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. Shipping Component (NEW)
// ─────────────────────────────────────────────────────────────────────────────

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
    <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20">
          <svg
            className="w-4 h-4 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Shipping
        </h3>
      </div>

      <div className="space-y-5">
        {/* Package Select */}
        <div>
          <label className="mb-1.5 flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-400">
            Package
            <span className="ml-1 rounded-full bg-gray-100 dark:bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Store default
            </span>
          </label>

          <div className="relative">
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-500 bg-transparent pl-4 pr-10 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
            >
              {PACKAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Package preview card */}
          {selectedPackage && selectedPackage !== "" && (
            <div className="mt-2 flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 dark:bg-blue-900/10 dark:border-blue-900/20 animate-in fade-in duration-200">
              <svg
                className="w-7 h-7 text-blue-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <div>
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                  {
                    PACKAGE_OPTIONS.find((o) => o.value === selectedPackage)
                      ?.label
                  }
                </p>
                <p className="text-[11px] text-blue-500 dark:text-blue-500 mt-0.5">
                  Selected package for this product
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700" />

        {/* Product Weight */}
        <div>
          <label className="mb-1.5 flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-400">
            Product weight
            <svg
              className="h-3.5 w-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>

          <div className="flex overflow-hidden rounded-lg border border-gray-500 shadow-theme-xs focus-within:border-brand-300 focus-within:ring focus-within:ring-brand-500/10 dark:border-gray-700 dark:focus-within:border-brand-800">
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="h-11 flex-1 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
            />
            {/* Unit Switcher */}
            <div className="flex border-l border-gray-500 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              {WEIGHT_UNITS.map((unit) => (
                <button
                  key={unit}
                  type="button"
                  onClick={() => setWeightUnit(unit)}
                  className={`h-11 px-3 text-xs font-semibold transition-colors ${
                    weightUnit === unit
                      ? "bg-brand-500 text-white"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">
            Used to calculate shipping rates. Enter the weight of the product
            including packaging.
          </p>
        </div>

        {/* Info note */}
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-white/[0.02]">
          <svg
            className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Shipping rates are auto-calculated at checkout based on the selected
            package and product weight. You can manage carrier rates in{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Store Settings → Shipping
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

// 7. Product Status Component
const ProductStatus = () => (
  <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
      Product Status
    </label>
    <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800">
      <option value="draft">Draft</option>
      <option value="active">Active</option>
      <option value="archived">Archived</option>
    </select>
  </div>
);

// 8. Organization Component
const Organization = () => (
  <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
      Organization
    </h3>
    <div className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Category
        </label>
        <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800">
          <option value="">Select Category</option>
          <option value="apparel">Apparel</option>
          <option value="home">Home Decor</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Tags
        </label>
        <input
          type="text"
          placeholder="e.g. Summer, Limited"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
    </div>
  </div>
);

// 9. Main Layout Component
const AddProductLayout = () => {
  return (
    <div className="bg-transparent text-black font-sans min-h-screen">
      <main className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-bold text-gray-800 dark:text-white/90">
            Add Product
          </h2>
          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <a
                  className="font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  href="/vendor-dashboard"
                >
                  Dashboard /
                </a>
              </li>
              <li className="font-medium text-brand-500">Add Product</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column – Main Details */}
          <div className="lg:col-span-2 space-y-6">
            <BasicInfo />
            <MediaUpload />
            <KeyFeatures />
            <CategorySection />
            <Pricing />
            <Shipping />
          </div>

          {/* Right Column – Meta Details */}
          <div className="space-y-6">
            <ProductStatus />
            <Organization />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProductLayout;
