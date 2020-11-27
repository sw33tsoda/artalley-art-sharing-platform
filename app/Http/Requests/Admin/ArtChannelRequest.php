<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ArtChannelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'channel_name' => 'required|min:2|max:60',
            'thumbnail' => 'max:2048|file|mimes:jpeg,png,jpg',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Không được bỏ trống',
            'min' => 'Tối thiểu :min ký tự',
            'max' => 'Tối đa :max ký tự',
            'file' => 'File tải lên không hợp lệ',
            'mimes' => 'Định dạng cho phép : .JPEG, .JPG, .PNG',
        ];
    }
}
