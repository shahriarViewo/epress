"use client";

import React from "react";
// import CreateCollectionModal from "./modal/CreateCollectionModal"; // Removed as we use a page now
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

// type SubCategory = { value: string; label: string };
// type CategoryNode = {
//   value: string;
//   label: string;
//   icon: string;
//   subCategories: SubCategory[];
// };

// const CATEGORY_TREE: CategoryNode[] = [
//   {
//     value: "automotive",
//     label: "Automotive",
//     icon: "🚗",
//     subCategories: [
//       { value: "car-electronics", label: "Car Electronics" },
//       { value: "car-parts", label: "Car Parts & Accessories" },
//       { value: "bike", label: "Bike & Cycling" },
//       { value: "tires-wheels", label: "Tires & Wheels" },
//       { value: "car-care", label: "Car Care & Cleaning" },
//       { value: "tools-equipment", label: "Tools & Equipment" },
//     ],
//   },
//   {
//     value: "clothing",
//     label: "Clothing",
//     icon: "👕",
//     subCategories: [
//       { value: "mens-clothing", label: "Men's Clothing" },
//       { value: "womens-clothing", label: "Women's Clothing" },
//       { value: "kids-clothing", label: "Kids' Clothing" },
//       { value: "accessories", label: "Accessories" },
//       { value: "sportswear", label: "Sportswear & Activewear" },
//       { value: "footwear", label: "Footwear" },
//     ],
//   },
//   {
//     value: "electronics",
//     label: "Electronics",
//     icon: "💻",
//     subCategories: [
//       { value: "smartphones", label: "Smartphones & Tablets" },
//       { value: "laptops", label: "Laptops & Computers" },
//       { value: "audio", label: "Audio & Headphones" },
//       { value: "cameras", label: "Cameras & Photography" },
//       { value: "gaming", label: "Gaming" },
//       { value: "smart-home", label: "Smart Home Devices" },
//     ],
//   },
//   {
//     value: "home-garden",
//     label: "Home & Garden",
//     icon: "🏡",
//     subCategories: [
//       { value: "furniture", label: "Furniture" },
//       { value: "bedding", label: "Bedding & Bath" },
//       { value: "kitchen", label: "Kitchen & Dining" },
//       { value: "garden", label: "Garden & Outdoor" },
//       { value: "lighting", label: "Lighting & Decor" },
//       { value: "storage", label: "Storage & Organization" },
//     ],
//   },
//   {
//     value: "sports",
//     label: "Sports & Outdoors",
//     icon: "⚽",
//     subCategories: [
//       { value: "team-sports", label: "Team Sports" },
//       { value: "fitness", label: "Fitness & Exercise" },
//       { value: "outdoor-recreation", label: "Outdoor Recreation" },
//       { value: "water-sports", label: "Water Sports" },
//       { value: "winter-sports", label: "Winter Sports" },
//     ],
//   },
//   {
//     value: "beauty",
//     label: "Beauty & Personal Care",
//     icon: "💄",
//     subCategories: [
//       { value: "skincare", label: "Skincare" },
//       { value: "haircare", label: "Hair Care" },
//       { value: "makeup", label: "Makeup & Cosmetics" },
//       { value: "fragrance", label: "Fragrance" },
//       { value: "mens-grooming", label: "Men's Grooming" },
//     ],
//   },
// ];

// const CategorySection = () => {
//   const [selectedParent, setSelectedParent] = React.useState<string>("");
//   const [selectedSub, setSelectedSub] = React.useState<string>("");

//   const parentNode =
//     CATEGORY_TREE.find((c) => c.value === selectedParent) ?? null;

//   const handleParentChange = (val: string) => {
//     setSelectedParent(val);
//     setSelectedSub("");
//   };

//   // Breadcrumb display
//   const breadcrumbParts: string[] = [];
//   if (parentNode) breadcrumbParts.push(parentNode.label);
//   if (selectedSub) {
//     const sub = parentNode?.subCategories.find((s) => s.value === selectedSub);
//     if (sub) breadcrumbParts.push(sub.label);
//   }

//   return (
//     <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
//           Category
//         </h3>
//         {breadcrumbParts.length > 0 && (
//           <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.05] rounded-full px-3 py-1.5">
//             {breadcrumbParts.map((part, i) => (
//               <React.Fragment key={i}>
//                 {i > 0 && (
//                   <svg
//                     className="w-3 h-3 text-gray-400 dark:text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 )}
//                 <span
//                   className={
//                     i === breadcrumbParts.length - 1
//                       ? "font-semibold text-gray-700 dark:text-gray-300"
//                       : ""
//                   }
//                 >
//                   {part}
//                 </span>
//               </React.Fragment>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="space-y-5">
//         {/* Step 1 – Parent Category */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400">
//             <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-xs font-bold mr-1.5">
//               1
//             </span>
//             Parent Category
//           </label>

//           {/* Visual category grid */}
//           <div className="grid grid-cols-3 gap-2 mb-3">
//             {CATEGORY_TREE.map((cat) => (
//               <button
//                 key={cat.value}
//                 type="button"
//                 onClick={() => handleParentChange(cat.value)}
//                 className={`flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 text-center transition-all
//                   ${
//                     selectedParent === cat.value
//                       ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-600"
//                       : "border-gray-200 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.02] dark:hover:border-gray-500 dark:hover:bg-white/[0.05]"
//                   }`}
//               >
//                 <span className="text-xl leading-none">{cat.icon}</span>
//                 <span
//                   className={`text-[11px] font-medium leading-tight ${selectedParent === cat.value ? "text-brand-700 dark:text-brand-400" : "text-gray-600 dark:text-gray-400"}`}
//                 >
//                   {cat.label}
//                 </span>
//                 {selectedParent === cat.value && (
//                   <span className="absolute top-1.5 right-1.5">
//                     <svg
//                       className="w-3.5 h-3.5 text-brand-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Also a select for accessibility / search */}
//           <select
//             value={selectedParent}
//             onChange={(e) => handleParentChange(e.target.value)}
//             className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
//           >
//             <option value="">— Select a parent category —</option>
//             {CATEGORY_TREE.map((cat) => (
//               <option key={cat.value} value={cat.value}>
//                 {cat.icon} {cat.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Step 2 – Sub Category (only shown when parent is chosen) */}
//         {parentNode && (
//           <div className="animate-in fade-in slide-in-from-top-2 duration-200">
//             <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400">
//               <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-xs font-bold mr-1.5">
//                 2
//               </span>
//               Sub-category{" "}
//               <span className="text-gray-400 dark:text-gray-600 ml-1">
//                 under {parentNode.label}
//               </span>
//             </label>

//             <div className="grid grid-cols-2 gap-2 mb-3">
//               {parentNode.subCategories.map((sub) => (
//                 <button
//                   key={sub.value}
//                   type="button"
//                   onClick={() => setSelectedSub(sub.value)}
//                   className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2.5 text-left text-sm transition-all
//                     ${
//                       selectedSub === sub.value
//                         ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:border-brand-600 dark:text-brand-400"
//                         : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-white/[0.02] dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-white/[0.05]"
//                     }`}
//                 >
//                   <span
//                     className={`flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedSub === sub.value ? "border-brand-500 bg-brand-500" : "border-gray-300 dark:border-gray-600"}`}
//                   >
//                     {selectedSub === sub.value && (
//                       <span className="w-1.5 h-1.5 rounded-full bg-white" />
//                     )}
//                   </span>
//                   <span className="font-medium text-xs">{sub.label}</span>
//                 </button>
//               ))}
//             </div>

//             <select
//               value={selectedSub}
//               onChange={(e) => setSelectedSub(e.target.value)}
//               className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
//             >
//               <option value="">— Select a sub-category —</option>
//               {parentNode.subCategories.map((sub) => (
//                 <option key={sub.value} value={sub.value}>
//                   {sub.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Confirmation pill */}
//         {selectedParent && selectedSub && (
//           <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 dark:bg-green-900/10 dark:border-green-900/30 animate-in fade-in duration-200">
//             <svg
//               className="w-4 h-4 text-green-500 flex-shrink-0"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <p className="text-sm text-green-700 dark:text-green-400 font-medium">
//               Category set to <strong>{parentNode?.label}</strong> →{" "}
//               <strong>
//                 {
//                   parentNode?.subCategories.find((s) => s.value === selectedSub)
//                     ?.label
//                 }
//               </strong>
//             </p>
//             <button
//               type="button"
//               onClick={() => {
//                 setSelectedParent("");
//                 setSelectedSub("");
//               }}
//               className="ml-auto text-green-400 hover:text-green-600 dark:hover:text-green-300 transition"
//             >
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// ─────────────────────────────────────────────────────────────────────────────
// 5. Functional Searchable Category Component (NEW)
// ─────────────────────────────────────────────────────────────────────────────

// 1. Demo Data (3 levels deep: Category -> Sub -> Sub-sub)
const DEMO_CATEGORIES = [
  {
    id: "c1",
    name: "Clothing",
    children: [
      {
        id: "c1-1",
        name: "Women's Clothing",
        children: [
          { id: "c1-1-1", name: "Dresses" },
          { id: "c1-1-2", name: "Tops & Tees" },
          { id: "c1-1-3", name: "Activewear" },
        ],
      },
      {
        id: "c1-2",
        name: "Men's Clothing",
        children: [
          { id: "c1-2-1", name: "T-Shirts" },
          { id: "c1-2-2", name: "Jackets" },
          { id: "c1-2-3", name: "Pants" },
        ],
      },
    ],
  },
  {
    id: "c2",
    name: "Electronics",
    children: [
      {
        id: "c2-1",
        name: "Computers",
        children: [
          { id: "c2-1-1", name: "Laptops" },
          { id: "c2-1-2", name: "Desktops" },
          { id: "c2-1-3", name: "Monitors" },
        ],
      },
      {
        id: "c2-2",
        name: "Mobile Phones",
        children: [
          { id: "c2-2-1", name: "Smartphones" },
          { id: "c2-2-2", name: "Accessories" },
        ],
      },
    ],
  },
];

// Helper to flatten categories for search
const getFlattenedCategories = () => {
  const flatList: { id: string; path: string[]; name: string }[] = [];
  DEMO_CATEGORIES.forEach((cat) => {
    cat.children?.forEach((sub) => {
      sub.children?.forEach((subSub) => {
        flatList.push({
          id: subSub.id,
          name: subSub.name,
          path: [cat.name, sub.name, subSub.name],
        });
      });
    });
  });
  return flatList;
};

const CategorySection = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  // State for navigating the drill-down menu
  const [currentLevel, setCurrentLevel] = React.useState(DEMO_CATEGORIES);
  const [navigationPath, setNavigationPath] = React.useState<{id: string, name: string}[]>([]);
  
  // Final selected value
  const [selectedCategoryPath, setSelectedCategoryPath] = React.useState<string[] | null>(null);

  const flatCategories = React.useMemo(() => getFlattenedCategories(), []);

  // Filter categories based on typing
  const searchResults = React.useMemo(() => {
    if (!searchTerm) return [];
    return flatCategories.filter(
      (cat) =>
        cat.path.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, flatCategories]);

  // Handle clicking an item in the drill-down menu
  const handleMenuClick = (item: any) => {
    if (item.children) {
      // Go deeper into the menu
      setCurrentLevel(item.children);
      setNavigationPath([...navigationPath, { id: item.id, name: item.name }]);
      setSearchTerm(""); // Clear search so menu shows
    } else {
      // It's a final sub-sub-category, select it!
      const finalPath = [...navigationPath.map((p) => p.name), item.name];
      setSelectedCategoryPath(finalPath);
      setIsDropdownOpen(false);
      setSearchTerm("");
      
      // Reset menu for next time
      setCurrentLevel(DEMO_CATEGORIES);
      setNavigationPath([]);
    }
  };

  // Handle clicking a search result
  const handleSearchResultClick = (path: string[]) => {
    setSelectedCategoryPath(path);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  // Go back one level in the drill-down menu
  const handleBackClick = () => {
    const newNavPath = [...navigationPath];
    newNavPath.pop(); // remove last
    setNavigationPath(newNavPath);
    
    // Find the correct children to show based on the new path
    let level: any = DEMO_CATEGORIES;
    newNavPath.forEach((navItem) => {
      level = level.find((l: any) => l.id === navItem.id)?.children || [];
    });
    setCurrentLevel(level);
  };

  return (
    <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 relative">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Product category
        </h3>
      </div>

      <div className="space-y-3">
        {/* Selected Category Breadcrumb Display */}
        {selectedCategoryPath && (
          <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/[0.02] px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center flex-wrap gap-2">
              {selectedCategoryPath.map((part, index) => (
                <React.Fragment key={index}>
                  <span className={index === selectedCategoryPath.length - 1 ? "font-bold text-gray-900 dark:text-white" : ""}>
                    {part}
                  </span>
                  {index < selectedCategoryPath.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-600 text-xs">❯</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <button 
              onClick={() => setSelectedCategoryPath(null)}
              className="text-red-500 hover:text-red-700 ml-2 font-medium text-xs"
            >
              Clear
            </button>
          </div>
        )}

        {/* Search Input Area */}
        <div className="relative">
          <input
            type="text"
            placeholder={selectedCategoryPath ? "Change category..." : "Search or select category..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          />
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              
              {/* Close button for dropdown */}
              <div className="flex justify-end p-2 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                 <button onClick={() => setIsDropdownOpen(false)} className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white">Close X</button>
              </div>

              {searchTerm.length > 0 ? (
                /* SEARCH RESULTS VIEW */
                <div className="py-2">
                  {searchResults.length > 0 ? (
                    searchResults.map((res) => (
                      <button
                        key={res.id}
                        onClick={() => handleSearchResultClick(res.path)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        <span className="text-gray-400 dark:text-gray-500 text-xs block mb-1">
                          {res.path[0]} &rsaquo; {res.path[1]}
                        </span>
                        <span className="font-medium">{res.path[2]}</span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 text-center">
                      No categories found for "{searchTerm}"
                    </div>
                  )}
                </div>
              ) : (
                /* DRILL-DOWN MENU VIEW */
                <div>
                  {/* Show Back Button if not on top level */}
                  {navigationPath.length > 0 && (
                    <button
                      onClick={handleBackClick}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 dark:hover:bg-brand-900/40 border-b border-gray-100 dark:border-gray-700 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      Back to {navigationPath.length === 1 ? 'Main Categories' : navigationPath[navigationPath.length - 2].name}
                    </button>
                  )}
                  
                  {/* Current Level List */}
                  <div className="py-1">
                    {currentLevel.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleMenuClick(item)}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        <span>{item.name}</span>
                        {item.children && (
                           <span className="text-gray-400 dark:text-gray-500 text-xs">❯</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Determines tax rates and adds metafields to improve search, filters, and cross-channel sales.
        </p>
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

// ─────────────────────────────────────────────────────────────────────────────
// 7. Variants Component (NEW)
// ─────────────────────────────────────────────────────────────────────────────

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

  const handleSaveSizeModal = () => {
    setSavedSizes(tempSizes);
    closeModal();
  };

  const handleSaveColorModal = () => {
    setSavedColors(tempColors);
    closeModal();
  };

  const toggleTempSize = (size: string) => {
    setTempSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const toggleTempColor = (colorObj: { name: string; hex: string }) => {
    setTempColors(prev => prev.some(c => c.name === colorObj.name) 
      ? prev.filter(c => c.name !== colorObj.name) 
      : [...prev, colorObj]
    );
  };

  const addCustomSize = () => {
    if (customSizeVal.trim() && !tempSizes.includes(customSizeVal.trim())) {
      setTempSizes([...tempSizes, customSizeVal.trim()]);
    }
    setCustomSizeVal("");
    setShowCustomSize(false);
  };

  const addCustomColor = () => {
    if (customColorName.trim() && !tempColors.some(c => c.name === customColorName.trim())) {
      setTempColors([...tempColors, { name: customColorName.trim(), hex: customColorHex }]);
    }
    setCustomColorName("");
    setCustomColorHex("#3B82F6");
    setShowCustomColor(false);
  };

  const combinations = React.useMemo(() => {
    if (savedSizes.length === 0 && savedColors.length === 0) return [];
    if (savedSizes.length > 0 && savedColors.length === 0) return savedSizes.map(s => ({ title: s }));
    if (savedSizes.length === 0 && savedColors.length > 0) return savedColors.map(c => ({ title: c.name }));
    
    const combos: { title: string }[] = [];
    savedSizes.forEach(s => {
      savedColors.forEach(c => {
        combos.push({ title: `${s} / ${c.name}` });
      });
    });
    return combos;
  }, [savedSizes, savedColors]);

  return (
    <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 font-sans">
      <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">Variants</h3>

      <div className="mb-6">
        <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wide">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          Recommended Variants
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => openModal('size')} className="flex items-center gap-1.5 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 dark:bg-teal-900/20 dark:text-teal-400 dark:hover:bg-teal-900/40 transition">
            <span className="text-lg leading-none">+</span> Size
          </button>
          <button onClick={() => openModal('color')} className="flex items-center gap-1.5 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 dark:bg-teal-900/20 dark:text-teal-400 dark:hover:bg-teal-900/40 transition">
            <span className="text-lg leading-none">+</span> Color
          </button>
        </div>
        <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition">
          + Add custom option
        </button>
      </div>

      {(savedSizes.length > 0 || savedColors.length > 0) && (
        <div className="space-y-4 mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
          {savedSizes.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sizes:</p>
              <div className="flex flex-wrap gap-2">
                {savedSizes.map(size => (
                  <span key={size} className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    {size}
                    <button onClick={() => setSavedSizes(prev => prev.filter(s => s !== size))} className="text-gray-500 hover:text-red-500">&times;</button>
                  </span>
                ))}
              </div>
            </div>
          )}
          {savedColors.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Colors:</p>
              <div className="flex flex-wrap gap-2">
                {savedColors.map(color => (
                  <span key={color.name} className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    <span className="w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600" style={{ backgroundColor: color.hex }}></span>
                    {color.name}
                    <button onClick={() => setSavedColors(prev => prev.filter(c => c.name !== color.name))} className="text-gray-500 hover:text-red-500">&times;</button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Combinations Table */}
      {combinations.length > 0 && (
        <div className="mt-8 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-300 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">Variant Combinations</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Set inventory and pricing for each variation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
              <thead className="bg-gray-50 dark:bg-gray-800/30 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Variant</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Available</th>
                  <th className="px-4 py-3 font-semibold">SKU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                {combinations.map((combo, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{combo.title}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 px-2 shadow-sm">
                        <span className="text-gray-500 text-sm">$</span>
                        <input type="number" placeholder="0.00" className="w-20 bg-transparent py-1.5 pl-1 text-sm outline-none dark:text-white" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <input type="number" placeholder="0" className="w-20 rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm shadow-sm outline-none dark:text-white" />
                    </td>
                    <td className="px-4 py-3">
                      <input type="text" placeholder="SKU" className="w-full rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm shadow-sm outline-none dark:text-white" />
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
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={closeModal} />
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 slide-in-from-bottom-2 duration-200 overflow-hidden ring-1 ring-gray-900/5 dark:ring-white/10">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Add {activeModal === 'size' ? 'Size' : 'Color'} Values</h3>
                <p className="text-sm text-gray-500 font-medium">Select or create new variants</p>
              </div>
              <button 
                onClick={closeModal} 
                className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                {/* 1. Presets Grid */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 text-xs">1</span>
                      Select {activeModal === 'size' ? 'Size' : 'Color'}
                    </h4>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                      {activeModal === 'size' ? tempSizes.length : tempColors.length} selected
                    </span>
                  </div>
                   
                   {activeModal === 'size' ? (
                      <div className="flex flex-wrap gap-3">
                        {QUICK_SIZES.map((size) => (
                           <button
                              key={size}
                              type="button"
                              onClick={() => toggleTempSize(size)}
                              className={`group min-w-[50px] flex items-center justify-center py-2 px-4 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                                tempSizes.includes(size)
                                  ? "bg-teal-600 border-teal-600 text-white shadow-md dark:bg-teal-500 dark:border-teal-500"
                                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
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
                              key={color.name} 
                              onClick={() => toggleTempColor(color)} 
                              className={`
                                flex items-center justify-start gap-3 py-2 px-3 text-sm font-medium rounded-lg border transition-all duration-200 group
                                ${tempColors.some(c => c.name === color.name) 
                                  ? 'bg-teal-50 border-teal-500 text-teal-800 ring-1 ring-teal-500 shadow-sm dark:bg-teal-900/40 dark:text-teal-100 dark:border-teal-400 dark:ring-teal-400' 
                                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                                }
                              `}
                            >
                              <span 
                                className={`w-5 h-5 flex-shrink-0 rounded-full shadow-sm ring-1 ring-black/5 ${color.border ? 'border border-gray-200' : ''}`} 
                                style={{ backgroundColor: color.hex }}
                              />
                              <span className="truncate">{color.name}</span>
                              {tempColors.some(c => c.name === color.name) && (
                                <svg className="w-4 h-4 ml-1.5 flex-shrink-0 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                              )}
                            </button> 
                         ))}
                      </div>
                   )}
                </div>

                {/* 2. Custom Input */}
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                   <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 text-xs">2</span>
                      Add Custom Option
                   </h4>
                   <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      {activeModal === 'size' ? (
                          <div className="flex gap-3">
                            <input 
                                type="text" 
                                value={customSizeVal} 
                                onChange={(e) => setCustomSizeVal(e.target.value)} 
                                onKeyDown={(e) => e.key === 'Enter' && addCustomSize()}
                                placeholder="Type custom size (e.g. 32, Petite)..." 
                                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 dark:text-white transition-all" 
                              />
                            <button 
                              onClick={addCustomSize} 
                              disabled={!customSizeVal.trim()}
                              className="px-6 py-2.5 bg-gray-900 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center gap-2"
                            >
                              Add
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </button>
                          </div>
                      ) : (
                          <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all">
                                <div className="relative group">
                                  <input 
                                    type="color" 
                                    value={customColorHex} 
                                    onChange={(e) => setCustomColorHex(e.target.value)} 
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
                                  />
                                  <div 
                                    className="w-8 h-8 rounded border border-gray-200 dark:border-gray-700 shadow-sm"
                                    style={{ backgroundColor: customColorHex }}
                                  />
                                </div>
                                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
                                <input 
                                  type="text" 
                                  value={customColorHex}
                                  onChange={(e) => setCustomColorHex(e.target.value)}
                                  className="w-20 bg-transparent text-xs font-mono text-gray-600 dark:text-gray-300 outline-none uppercase" 
                                />
                            </div>
                            <input 
                                type="text" 
                                value={customColorName} 
                                onChange={(e) => setCustomColorName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addCustomColor()}
                                placeholder="Color Name (e.g. Midnight Blue)"
                                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 dark:text-white transition-all" 
                            />
                             <button 
                              onClick={addCustomColor} 
                              disabled={!customColorName.trim()}
                              className="px-6 py-2.5 bg-gray-900 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center gap-2"
                            >
                              Add
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </button>
                          </div>
                      )}
                      
                      <p className="mt-3 text-[11px] text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Added customs are automatically selected.
                      </p>
                   </div>
                </div>

              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/80 backdrop-blur-sm">
              <button 
                onClick={closeModal} 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200/50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={activeModal === 'size' ? handleSaveSizeModal : handleSaveColorModal}
                className="rounded-xl bg-teal-600 px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-teal-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
              >
                Done
                <span className="bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
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
const Organization = () => {
    return (
        <div className="rounded-2xl border border-gray-500 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <h3 className="mb-4 text-sm font-bold text-gray-800 dark:text-white/90 flex items-center gap-2">
                Product organization
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. T-Shirt"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Vendor
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nike"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Collections
                    </label>
                    <NextLink
                        href="/add-collection"
                        className="text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 flex items-center gap-1 transition-colors"
                    >
                        + Add new collection
                    </NextLink>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        Home page
                        <button className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </span>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search for collections"
                      className="dark:bg-dark-900 h-10 w-full rounded-lg border border-gray-500 bg-transparent pl-10 pr-4 py-2 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder="Vintage, cotton, summer"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
            </div>
        </div>
    );
};

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
            <VariantsSection />
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
