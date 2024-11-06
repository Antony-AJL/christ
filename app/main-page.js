import { createViewModel } from './main-view-model';
import { AuthService } from './services/auth.service';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
    const page = args.object;
    
    // Check if user is logged in
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
        Frame.topmost().navigate({
            moduleName: 'login-page',
            clearHistory: true
        });
        return;
    }
    
    page.bindingContext = createViewModel();
}
