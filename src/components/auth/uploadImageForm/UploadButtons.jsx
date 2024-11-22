export const UploadButtons = ({
  isUploading,
  photoCaptured,
  onCapture,
  onSave,
  onDelete,
  onClose,
}) => (
  <div className="flex space-x-4">
    {!photoCaptured ? (
      <button
        onClick={onCapture}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        گرفتن عکس
      </button>
    ) : (
      <>
        <button
          onClick={onSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          ذخیره عکس
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          حذف عکس
        </button>
      </>
    )}
    {!photoCaptured && (
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        بستن دوربین
      </button>
    )}
  </div>
);
