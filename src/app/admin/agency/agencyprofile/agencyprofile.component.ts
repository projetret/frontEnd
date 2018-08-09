import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-agencyprofile',
    templateUrl: './agencyprofile.component.html',
    styleUrls: ['./agencyprofile.component.scss']
})
export class AgencyprofileComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // Edit

        $('#Edit').click(function (event) {
            event.preventDefault();
            $('#agency_profile input, #agency_profile select').prop('disabled', false); // Element(s) are now enabled.
            // $('#company').prop('disabled', true);
            $('#company,#vat').attr('disabled', 'disabled');
        });
        // Cancel
        $('#Cancel').on('click', function () {
            $('#agency_profile').trigger('reset');
        });
        // Clear

        $('#Clear').on('click', function () {
            $('#agency_profile').find('input:text, input:password, select, textarea').val('');
            $('#agency_profile input, #agency_profile select').attr('placeholder', '');
            $('#agency_profile').find('input:radio, input:checkbox').prop('checked', false);
            $('#company').attr('placeholder', 'Enter your company name');
            $('#vat').attr('placeholder', 'EPL1234567890');

        });
        $('#Edit1').click(function (event) {
            event.preventDefault();
            $('#agency_profile input, #agency_profile select').prop('disabled', false); // Element(s) are now enabled.
            // $('#company').prop('disabled', true);
            $('#company,#vat').attr('disabled', 'disabled');
        });
        // Cancel
        $('#Cancel1').on('click', function () {
            $('#agency_profile').trigger('reset');
        });
        // Clear

        $('#Clear1').on('click', function () {
            $('#agency_profile').find('input:text, input:password, select, textarea').val('');
            $('#agency_profile input, #agency_profile select').attr('placeholder', '');
            $('#agency_profile').find('input:radio, input:checkbox').prop('checked', false);
            $('#company').attr('placeholder', 'Enter your company name');
            $('#vat').attr('placeholder', 'EPL1234567890');

        });
        // img upload
        function readURL(input) {
            if (input.files && input.files[0]) {

                const reader = new FileReader();

                reader.onload = function (e) {
                    $('#Logo_preview').attr('src', this.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        $('#Logo').change(function () {
            readURL(this);
        });

    }
}

