import { UploadButtons } from "./UploadButtons";

export const CameraPreview = ({
  storeData,
  videoRef,
  photoCaptured,
  onCapture,
  onSave,
  onDelete,
  onClose,
}) => (
  <div className="flex flex-col items-center">
    {storeData ? (
      <img
        src={storeData}
        alt="Captured"
        className="w-full max-w-md rounded-md mb-4"
      />
    ) : (
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full max-w-md rounded-md mb-4"
      ></video>
    )}

    <UploadButtons
      isUploading={false}
      photoCaptured={photoCaptured}
      onCapture={onCapture}
      onSave={onSave}
      onDelete={onDelete}
      onClose={onClose}
    />
  </div>
);
