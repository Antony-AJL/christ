import { Observable } from '@nativescript/core';
import { AuthService } from './services/auth.service';
import { Frame } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  } else {
    return `${counter} taps left`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = () => {
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
  };

  viewModel.onSignOut = async () => {
    try {
      await AuthService.signOut();
      Frame.topmost().navigate({
        moduleName: 'login-page',
        clearHistory: true
      });
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return viewModel;
}
