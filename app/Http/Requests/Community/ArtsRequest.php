<?php

namespace App\Http\Requests\Community;

use Illuminate\Foundation\Http\FormRequest;

class ArtsRequest extends FormRequest
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
            // 'title' => 'required|min:2|max:100',
            // 'caption' => 'min:2|max:300|nullable',
            // 'description' => 'min:2|1500|nullable',
            // 'dimensional' => 'required',
            // 'privacy' => 'required',
            // 'channel' => 'required',
            // 'art' => 'required|max:2048|file|mimes:jpeg,png,jpg',
            // 'tags' => 'nullable'
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
            'art.required' => 'Không có File'
        ];
    }
}
