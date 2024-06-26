import { useState } from 'react';
import { EModelEndpoint } from 'librechat-data-provider';
import type { TConversation, TMessage } from 'librechat-data-provider';
import { Clipboard, CheckMark, EditIcon, RegenerateIcon, ContinueIcon,ThumbsDownIcon, ThumbsDownClickedIcon, ThumbsUpIcon, ThumbsUpClickedIcon } from '~/components/svg';
import { useGenerationsByLatest, useLocalize } from '~/hooks';
import { cn } from '~/utils';

type THoverButtons = {
  isEditing: boolean;
  enterEdit: (cancel?: boolean) => void;
  copyToClipboard: (setIsCopied: React.Dispatch<React.SetStateAction<boolean>>) => void;
  conversation: TConversation | null;
  isSubmitting: boolean;
  message: TMessage;
  regenerate: () => void;
  handleContinue: (e: React.MouseEvent<HTMLButtonElement>) => void;
  latestMessage: TMessage | null;
  isLast: boolean;
};

export default function HoverButtons({
  isEditing,
  enterEdit,
  copyToClipboard,
  conversation,
  isSubmitting,
  message,
  regenerate,
  handleContinue,
  latestMessage,
  isLast,
}: THoverButtons) {
  const localize = useLocalize();
  const { endpoint: _endpoint, endpointType } = conversation ?? {};
  const endpoint = endpointType ?? _endpoint;
  const [isCopied, setIsCopied] = useState(false);
  const { hideEditButton, regenerateEnabled, continueSupported } = useGenerationsByLatest({
    isEditing,
    isSubmitting,
    message,
    endpoint: endpoint ?? '',
    latestMessage,
  });
  if (!conversation) {
    return null;
  }

  const { isCreatedByUser } = message;

  const onEdit = () => {
    if (isEditing) {
      return enterEdit(true);
    }
    enterEdit();
  };

  // Correctly using useState to manage the ThumbsDownClicked state
  const [ThumbsDownClicked, setThumbsDownClicked] = useState(false);

  // Function to handle the click event on the thumbs down button
  const handleThumbsDownClick = () => {
    setThumbsDownClicked(!ThumbsDownClicked); // Toggle the ThumbsDownClicked state
    console.log('Thumbs Down Clicked:', !ThumbsDownClicked);
  };

  // Correctly using useState to manage the ThumbsDownClicked state
  const [ThumbsUpClicked, setThumbsUpClicked] = useState(false);

  // Function to handle the click event on the thumbs down button
  const handleThumbsUpClick = () => {
    setThumbsUpClicked(!ThumbsUpClicked); // Toggle the ThumbsDownClicked state
    console.log('Thumbs Up Clicked:', !ThumbsUpClicked);
  };

  return (
    <div className="visible mt-0 flex justify-center gap-1 self-end text-gray-400 lg:justify-start">
      {endpoint !== EModelEndpoint.assistants && (
        <button
          className={cn(
            'hover-button rounded-md p-1 text-gray-400 hover:text-gray-900 dark:text-gray-400/70 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:group-hover:visible md:group-[.final-completion]:visible',
            isCreatedByUser ? '' : 'active',
            hideEditButton ? 'opacity-0' : '',
            isEditing ? 'active bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200' : '',
            !isLast ? 'md:opacity-0 md:group-hover:opacity-100' : '',
          )}
          onClick={onEdit}
          type="button"
          title={localize('com_ui_edit')}
          disabled={hideEditButton}
        >
          <EditIcon />
        </button>
      )}
      <button
        className={cn(
          'ml-0 flex items-center gap-1.5 rounded-md p-1 text-xs hover:text-gray-900 dark:text-gray-400/70 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:group-hover:visible md:group-[.final-completion]:visible',
          isSubmitting && isCreatedByUser ? 'md:opacity-0 md:group-hover:opacity-100' : '',
          !isLast ? 'md:opacity-0 md:group-hover:opacity-100' : '',
        )}
        onClick={() => copyToClipboard(setIsCopied)}
        type="button"
        title={
          isCopied ? localize('com_ui_copied_to_clipboard') : localize('com_ui_copy_to_clipboard')
        }
      >
        {isCopied ? <CheckMark /> : <Clipboard />}
      </button>
      {regenerateEnabled ? (
        <button
          className={cn(
            'hover-button active rounded-md p-1 text-gray-400 hover:text-gray-900 dark:text-gray-400/70 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible md:group-[.final-completion]:visible',
            !isLast ? 'md:opacity-0 md:group-hover:opacity-100' : '',
          )}
          onClick={regenerate}
          type="button"
          title={localize('com_ui_regenerate')}
        >
          <RegenerateIcon className="hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" />
        </button>
      ) : null}
      {continueSupported ? (
        <button
          className={cn(
            'hover-button active rounded-md p-1 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400/70 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible ',
            !isLast ? 'md:opacity-0 md:group-hover:opacity-100' : '',
          )}
          onClick={handleContinue}
          type="button"
          title={localize('com_ui_continue')}
        >
          <ContinueIcon className="h-4 w-4 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" />
        </button>
      ) : null}

        {/* <button
          className="hover-button rounded-md p-1 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible"
          onClick={() => {
            // Inline click handling logic
            ThumbsDownClicked = useState(false); // This variable is set to true on click
            console.log('Thumbs Down Clicked:', ThumbsDownClicked);
          }}
          type="button"
          title={localize('com_ui_thumbs_down')}
        >
          {ThumbsDownClicked ? <ThumbsDownClickedIcon /> : <ThumbsDownIcon className="h-4 w-4 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" />}
          
        </button>   */}

      {regenerateEnabled ? (
        <button
          className={cn(
            'ml-0 flex items-center gap-1.5 rounded-md p-1 text-xs hover:text-gray-900 dark:text-gray-400/70 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:group-hover:visible md:group-[.final-completion]:visible',
            isSubmitting && isCreatedByUser ? 'md:opacity-0 md:group-hover:opacity-100' : '',
            !isLast ? 'md:opacity-0 md:group-hover:opacity-100' : '',
          )}
            // onClick={() => {
            //   // Inline click handling logic
            //   ThumbsDownClicked = useState(true); // This variable is set to true on click
            //   console.log('Thumbs Down Clicked:', ThumbsDownClicked);
            // }}
            // onClick={() => copyToClipboard(setIsCopied)}

            onClick={handleThumbsUpClick}

            type="button"
            title={localize('com_ui_thumbs_up')}
        >
          {ThumbsUpClicked ? <ThumbsUpClickedIcon className="h-4 w-4" /> : <ThumbsUpIcon className="h-4 w-4" />}
        </button>
      ) : null}



      {regenerateEnabled ? (
        <button
          className={cn(
            'ml-0 flex items-center gap-1.5 rounded-md p-1 text-xs hover:text-gray-900 dark:text-gray-400/70 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:group-hover:visible md:group-[.final-completion]:visible',
            isSubmitting && isCreatedByUser ? 'md:opacity-0 md:group-hover:opacity-100' : '',
            !isLast ? 'md:opacity-0 md:group-hover:opacity-100' : '',
          )}
            // onClick={() => {
            //   // Inline click handling logic
            //   ThumbsDownClicked = useState(true); // This variable is set to true on click
            //   console.log('Thumbs Down Clicked:', ThumbsDownClicked);
            // }}
            // onClick={() => copyToClipboard(setIsCopied)}

            onClick={handleThumbsDownClick}

            type="button"
            title={localize('com_ui_thumbs_down')}
        >
          {ThumbsDownClicked ? <ThumbsDownClickedIcon className="h-4 w-4" /> : <ThumbsDownIcon className="h-4 w-4" />}
        </button>
      ) : null}

    </div>
  );
}
