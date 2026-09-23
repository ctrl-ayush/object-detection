import cv2


class VideoWriter:

    def __init__(self, output_path, fps, width, height):
        """
        Initialize video writer

        Using H264 codec so the video plays correctly
        inside browser HTML5 video players.
        """

        # Use browser-compatible codec
        fourcc = cv2.VideoWriter_fourcc(*"avc1")

        self.writer = cv2.VideoWriter(
            output_path,
            fourcc,
            fps,
            (width, height)
        )


    def write_frame(self, frame):
        """
        Write processed frame to video
        """
        self.writer.write(frame)


    def release(self):
        """
        Release writer and finalize video file
        """
        self.writer.release()